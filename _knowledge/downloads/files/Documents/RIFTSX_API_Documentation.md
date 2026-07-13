# RIFTS-X Strategic Intelligence Platform API Portal
Comprehensive Integration Reference for System Developers and AI Agents

---

## 1. Authentication & Security
The RIFTS-X REST API enforces token-based authentication. Every API request must include the `Authorization` header containing your API token.

### Obtain API Token
- **Endpoint**: `POST /registry/api/token-auth/`
- **Payload**:
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Response**:
  ```json
  {
    "token": "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b"
  }
  ```

### Header Convention
Include the token in all subsequent requests:
`Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`

---

## 2. Guidelines for AI Agents
If you are an agentic LLM/AI workflow orchestrator:
1. **Header Inclusion**: Ensure the `Authorization` header is present in all tool-based HTTP calls.
2. **State Monitoring**: Periodically poll endpoints like `/api/requisitions/` or `/api/brds/` to read updates on approval flows.
3. **Quorum Logic**: Approve BRD levels sequentially (PMT -> HOD -> Board). Once the required approvals are submitted via `/sign/`, the document automatically moves to Approved.
4. **Signature Operations**: Workflows like signing a requisition or BRD expect base64-encoded PNG signature data (`"signature_data": "data:image/png;base64,..."`).

---

## 3. Core API Endpoint Reference

### 3.1. Physical Document Registry
- `GET /registry/api/files/` - List all metadata files.
- `POST /registry/api/files/` - Create a physical registry file entry.
- `GET /registry/api/borrows/` - View document borrowing custody logs.

### 3.2. Cloud Document Vault
- `GET /registry/api/cloud-folders/` - List digital vault folders.
- `GET /registry/api/cloud-files/` - List digital documents.
- `POST /registry/api/cloud-files/` - Upload a new file.

### 3.3. Kanban Projects & Sprints
- `GET /registry/api/projects/` - List all projects.
- `POST /registry/api/project-tasks/` - Create or update a project task.

### 3.4. Supply Requisitions (Workflow Actions)
- `GET /registry/api/requisitions/` - View requisitions.
- `POST /registry/api/requisitions/{id}/sign/` - Sign, approve, or reject a requisition.
  - **Payload for Approval**:
    ```json
    {
      "action": "approve",
      "signature_data": "data:image/png;base64,..."
    }
    ```
  - **Payload for Rejection**:
    ```json
    {
      "action": "reject",
      "rejection_reason": "Provide reason here"
    }
    ```

### 3.5. Business Requirement Documents (BRDs)
- `GET /registry/api/brds/` - View all BRDs.
- `POST /registry/api/brds/{id}/sign/` - Sign a BRD (advancing PMT/HOD/Board approval status).
  - **Payload**:
    ```json
    {
      "action": "approve",
      "signature_data": "data:image/png;base64,..."
    }
    ```

---

## 4. Response Codes
- `200 OK` / `201 Created` - Success.
- `400 Bad Request` - Invalid payload or logic constraint violation.
- `401 Unauthorized` - Token missing or invalid.
- `403 Forbidden` - Insufficient role permissions to access/modify resource.
- `404 Not Found` - Resource does not exist.
