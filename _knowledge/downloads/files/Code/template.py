import pdfplumber
import io, os, sys
from pathlib import Path



input_path = sys.argv[1]




def process_pdf(pdf_path):
	"""
    Process the specified PDF file
    """
	try:
		if not os.path.exists(pdf_path):
			print(f"Error: PDF file not found: {pdf_path}")
			return False

		if not pdf_path.lower().endswith('.pdf'):
			print(f"Error: File is not a PDF: {pdf_path}")
			return False
		with pdfplumber.open(pdf_path) as pdf:
			for page in pdf.pages:
				tx = page.extract_text()
				print(tx)

	except:
		print(f"can not process {pdf_path}")





process_pdf(input_path)



