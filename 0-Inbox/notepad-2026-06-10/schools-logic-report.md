# Schools Module — How It Works

**File:** [`app/schools_comparison.py`](file:///d:/Fintech%20logic/Fintech_Backend_MODULE_UPLOAD_UI_FIXED-1/app/schools_comparison.py)  
**Endpoint:** `POST /api/compare/schools`

---

## Overview

The Schools module receives a comparison request from a frontend user, processes and scores each school across multiple dimensions, and returns a ranked list with highlights, badges, and a natural-language recommendation. It is fully deterministic — no ML, no database queries for comparison logic.

---

## Step-by-Step Flow

```
POST /api/compare/schools
        │
        ▼
1. validate_schools_request()  — check category, min schools
        │
        ▼
2. fetch_schools()             — filter by selectedSchoolIds + budget
        │
        ▼
3. build_school_item() ×N      — normalise each school into a flat struct
        │
        ▼
4. apply_scores() ×N           — score each school on 5 dimensions
        │
        ▼
5. generate_school_highlights() — find the winner in each highlight lane
        │
        ▼
6. generate_school_badges()    — assign label badges to each school
        │
        ▼
7. sort_items()                — sort by comparisonGoal
        │
        ▼
8. generate_school_recommendation() — build a text summary
        │
        ▼
      JSON Response
```

---

## 1. Supported School Categories

| Accepted Input | Normalised To |
|---|---|
| `primary_schools`, `primary_school` | **Primary Schools** |
| `high_schools`, `secondary_school` | **High Schools** |
| `a_level_schools`, `alevel_schools`, `a_level` | **A-Level Schools** |
| `combined_schools`, `combined_school` | **Combined Schools** |
| `colleges`, `college` | **Colleges** |
| `vocational_technical_institutions`, `technical_institutions` | **Vocational / Technical Institutions** |

Category mismatches across schools in the same request are **rejected with a validation error** — you can't mix Primary and High schools in one comparison.

---

## 2. Fee Calculation

This is the heart of the engine. Three totals are computed per school:

### Day School Total
```
dayTotal = tuitionFee + levy + examFees + uniformEstimate
         + booksEstimate + transportEstimate + applicationFee
         + acceptanceFee + developmentFee + sportsFee + ictFee + otherCharges
```
Returns `None` if `tuitionFee` is missing.

### Boarding School Total
```
boardingTotal = tuitionFee + boardingFee + levy + examFees + uniformEstimate
              + booksEstimate + travelEstimate + applicationFee
              + acceptanceFee + developmentFee + sportsFee + ictFee + otherCharges
```
Returns `None` if either `tuitionFee` or `boardingFee` is missing.

### Selected Total (the operative fee used for comparison)
Chosen based on the user's `boardingPreference`:

| User Preference | Selected Total Logic |
|---|---|
| `boarding` | Uses `boardingTotal` if school offers boarding, else `None` |
| `day` | Uses `dayTotal` if school offers day, else `None` |
| `any` / unset | Uses `dayTotal` by default, falls back to `boardingTotal` |

> A school with `None` for `selectedTotal` is not excluded from comparison — it gets a **"Missing Fee Data"** badge instead.

---

## 3. Scoring System (5 Dimensions)

Every school is scored on a 1–5 scale on each dimension. Scores feed into a weighted overall score.

### A. Fees Score
Schools are **ranked against each other** — the cheapest gets a 5, most expensive gets a 1 (based on `selectedTotal`).

| Position | Score |
|---|---|
| 1st (cheapest) | 5 |
| 2nd | 4 |
| 3rd | 3 |
| 4th | 2 |
| 5th+ | 1 |

### B. Academic Score
Averaged from two sub-signals:

**National Ranking sub-score:**

| Ranking | Score |
|---|---|
| ≤ 10 | 5 |
| ≤ 25 | 4 |
| ≤ 50 | 3 |
| ≤ 100 | 2 |
| > 100 | 1 |

**Pass Rate sub-score:**

| Pass Rate | Score |
|---|---|
| ≥ 90% | 5 |
| ≥ 80% | 4 |
| ≥ 70% | 3 |
| ≥ 60% | 2 |
| < 60% | 1 |

> For **High Schools** the engine looks at `oLevelPassRate`. For **A-Level Schools** it looks at `aLevelPassRate`. Others use whichever is available.

### C. Boarding/Day Match Score
Compares the school's `boardingType` against the user's `boardingPreference`:

| User Preference | Day Only | Day & Boarding | Boarding Only | Weekly Boarding |
|---|---|---|---|---|
| `boarding` | 1 | 4 | 5 | 4 |
| `day` | 5 | 4 | 1 | 2 |
| `any` | 4 | 5 | 4 | 4 |

### D. Location Score
If `distanceKm` is provided:

| Distance | Score |
|---|---|
| ≤ 5 km | 5 |
| ≤ 15 km | 4 |
| ≤ 40 km | 3 |
| ≤ 100 km | 2 |
| > 100 km | 1 |

If no distance, falls back to **city/province matching** against `preferredCity` and `preferredProvince` from the user's preferences.

### E. Facilities Score
Based on a count of available facilities from this list:

> Science Lab, Computer Lab, Library, Sports Fields, Boarding Hostels, Clinic / Sick Bay, School Transport, Internet Access, Dining Hall, Career Guidance, Arts and Music, Debate / Clubs

| Count | Score |
|---|---|
| ≥ 8 | 5 |
| ≥ 6 | 4 |
| ≥ 4 | 3 |
| ≥ 2 | 2 |
| 1 | 1 |

**Bonus signals:**
- A-Level schools get +1 if they have both Science Lab AND Computer Lab.
- Boarding schools get +1 if they have both Boarding Hostels AND Dining Hall.

### F. Subject Match Score (A-Level only)
Matches the user's `preferredSubjects` against the school's available A-Level, science, commercial, and arts subjects:

| Match | Score |
|---|---|
| 100% match | 5 |
| ≥ 75% match | 4 |
| ≥ 50% match | 3 |
| Any match | 2 |
| No match | 1 |

---

## 4. Weighted Overall Score

The 5 dimension scores are combined into one `overall` score using category-specific weights:

### Default Weights (High Schools, Combined, Colleges)
| Dimension | Weight |
|---|---|
| Fees | **40%** |
| Academic | 25% |
| Boarding/Day Match | 15% |
| Location | 10% |
| Facilities | 10% |

### Primary School Weights
| Dimension | Weight |
|---|---|
| Fees | **45%** |
| Location | 20% |
| Facilities | 20% |
| Boarding/Day Match | 10% |
| Academic | 5% |

> Primary schools prioritise proximity and facilities over academic rankings, since national exam rankings are not relevant at that level.

### A-Level Weights
| Dimension | Weight |
|---|---|
| Fees | **35%** |
| Academic | 25% |
| **Subject Match** | **20%** |
| Boarding/Day Match | 10% |
| Facilities | 10% |

> A-Level adds a Subject Match dimension not present in other categories.

### Best Value Score
A separate score calculated for all schools regardless of category:
```
bestValue = fees(45%) + academic(30%) + facilities(15%) + boardingDayMatch(10%)
```

---

## 5. Highlights (Winners Per Lane)

The engine identifies the **single best school** in each highlight lane:

| Highlight | Winner Criterion |
|---|---|
| `cheapestSchool` | Lowest `selectedTotal` |
| `lowestTuition` | Lowest `tuitionFee` |
| `lowestBoardingFee` | Lowest `boardingFee` among boarding schools |
| `bestRanked` | Lowest `nationalRanking` number |
| `highestPassRate` | Highest pass rate (O-Level or A-Level depending on category) |
| `bestBoardingOption` | Weighted: boardingMatch(35%) + fees(25%) + academic(20%) + facilities(20%) |
| `bestDaySchool` | Weighted: boardingMatch(30%) + fees(30%) + academic(20%) + location(20%) |
| `bestValueSchool` | Highest `bestValue` score |
| `bestFacilities` | Highest `facilities` score |
| `bestOverall` | Highest `overall` weighted score |

**Category-specific bonus highlights:**
- **Primary:** also sets `cheapestPrimarySchool`, `bestValuePrimarySchool`
- **High Schools:** also sets `cheapestHighSchool`, `bestBoardingSchool`, `bestRankedHighSchool`, `bestValueHighSchool`
- **A-Level:** also sets `cheapestALevelOption`, `bestSubjectMatch`

---

## 6. Badges

Each school is automatically assigned badges from the following:

**Performance Badges** (only the winner gets these):
- `Cheapest School`, `Lowest Tuition`, `Lowest Boarding Fee`
- `Best Ranked`, `Highest Pass Rate`, `Best Boarding Option`
- `Best Day School`, `Best Value`, `Best Facilities`, `Best Overall`

**Attribute Badges** (applied to all qualifying schools):
- Curriculum: `ZIMSEC`, `Cambridge`, `IB`
- Type: `Day School`, `Boarding`, `Day & Boarding`, `Weekly Boarding`
- Ownership: `Private`, `Mission`, `Government`, `International`, `Trust`
- Status: `Applications Open`
- Warning: `Missing Fee Data`

---

## 7. Sorting

The final list is sorted based on the user's `comparisonGoal`:

| Goal | Sort By |
|---|---|
| `cheapest` | Lowest `selectedTotal` |
| `best_value` | Highest `bestValue` score |
| `best_ranked` | Lowest `nationalRanking` |
| `boarding` | Boarding match + fees + academic |
| `day` | Day match + fees + location |
| `best_overall` _(default)_ | Highest `overall` score |

Schools with `None` values always sort **last**.

---

## 8. Recommendation Text

A plain-English sentence is auto-generated from the highlights, e.g.:

> *"St. George's College is the cheapest option based on estimated total fees. Prince Edward is the best ranked school. Peterhouse offers the best value balance. Peterhouse is best overall because it balances total cost, academic performance, boarding/day fit, location, and facilities."*

---

## 9. API Request Reference

```json
{
  "category": "high_schools",
  "comparisonGoal": "best_overall",
  "currency": "USD",
  "selectedSchoolIds": [1, 2, 3],
  "preferences": {
    "boardingPreference": "boarding",
    "preferredCity": "Harare",
    "preferredProvince": "Harare",
    "preferredSubjects": ["Mathematics", "Physics"],
    "maxTotalFees": 2000,
    "filterAboveBudget": false
  },
  "items": [ ... ]
}
```

### Key Preferences

| Preference | Effect |
|---|---|
| `boardingPreference` | `day`, `boarding`, or `any` — affects fee selection and match score |
| `preferredCity` / `preferredProvince` | Used for location score when distance is not provided |
| `preferredSubjects` | Used for A-Level subject match score |
| `maxTotalFees` + `filterAboveBudget: true` | Removes schools over budget before comparison |
