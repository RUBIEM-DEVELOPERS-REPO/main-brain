# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import io, sys

from fpdf import FPDF
from PyPDF3 import PdfFileReader, PdfFileWriter
from pathlib import Path

IN_FILEPATH = "c:/receipts/receipt.pdf"
OUT_FILEPATH = "c:/receipts/db/signedscriptwriter.pdf"
ON_PAGE_INDEX = 0  # Index of the target page (starts at zero)

def new_content():
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font('times', 'B', 26)
    pdf.cell(50,25, 'lalalalaloooooooooo8520', align='L')
    return pdf.output()


reader = PdfFileReader(IN_FILEPATH)


page_overlay = PdfFileReader(io.BytesIO(new_content())).pages[0]

reader.pages[ON_PAGE_INDEX].mergePage(page2=page_overlay)

writer = PdfFileWriter()
writer.appendPagesFromReader(reader)
#writer.write('b', OUT_FILEPATH)
try:
    # 写入合并的pdf
    with open(OUT_FILEPATH, 'wb') as out:
        writer.write(out)
except Exception as e:
    print(e)
print("done")

def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
#if __name__ == '__main__':
    #print_hi('PyCharm')
#    pass

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
