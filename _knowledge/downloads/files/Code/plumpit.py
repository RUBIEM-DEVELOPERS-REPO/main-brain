import pdfplumber
import datetime
from pdfminer.layout import LAParams
from pdfminer.converter import TextConverter
import  pdfminer
import io
import subprocess
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
import os, sys
import shutil
import qrcode
from PIL import Image
import re
from configparser import ConfigParser
import math


from PyPDF3 import PdfFileReader, PdfFileWriter
from pathlib import Path
import time

licencem = ''
global_flag = 0
sigser = ''
siginv = ''
signature = ''
sigdate = ''
sigid = ''
sigver = ''
globnumx = ''
globnumd = ''
# pathfromc = sys.argv[1]
# pathfromc2 = "r\'" + pathfromc + "\'"
# print(pathfromc2)
re_line = re.compile(r'\d\.\d\d$')
re_linespecial = re.compile(r'\d\.\d\d$')
config = ConfigParser()
config.read("C:/cc300_interface/setup/fisca_lsettings.ini")
stopinv = 0
tinflag = 0
qty = '0'
cashxx = '0'
typeinv = config['TYPE']
typex = str(typeinv['type1'])
buyer = config['BUYER']
bname = str(buyer['name'])
btin = str( buyer['tin'])
bvat = str(buyer['vat'])
badd = str(buyer['address'])
conset = config['LINES']
get_currency = config['CURRENCY']
zimrainv = config['ZIMRA']
daynum = str(zimrainv['day'])
zimracr = str(zimrainv['invoicec'])
zimradb = str(zimrainv['invoiced'])
get_operator = config['OPERATOR']
get_invoice = config['INVNUMBER']
taxg2 = config['TAXG']
doctype = config['DOCTYPE']
default_delay1 = config['HTMLDELAY']
default_delay = default_delay1['delay']
totot = conset['total']
sigPositon = doctype['signaturepos']
topOffset = doctype['y']
topOffset2 = doctype['x']
topint = int(topOffset)
topintx = int(topOffset2)
bottomOffset = doctype['bottomoffset']
botint = int(bottomOffset)
xOffset = doctype['xoffset']
xoffset = int(xOffset)
fiscinv = str(doctype['invoice'])
credit = str(doctype['credit_note'])
debit = str(doctype['debit_note'])
USD = str(get_currency['usd'])
ZWL = str(get_currency['zwl'])
RAND = str(get_currency['rand'])
PULA = str(get_currency['pula'])
operator = str(get_operator['b'])
invoice_num = str(get_invoice['tag'])
credit_numm = str(get_invoice['cred'])
debit_numm = str(get_invoice['deb'])
taxg = str(taxg2['b'])
cash = 0
mytax = int(conset['tax'])
codex = ""
amountx = 0
qtyx = 0
currency = '1'
taxg = ''
docx = '1'
fisc = ""
total = ''
linetotal = ''
linetax = ''
linetaxg = '3'
verification = ''
sigurl = ''
flag1 = 0
my_time = datetime.datetime.now()
my_timestr = str(my_time)
my_timestr = my_timestr.replace(':','_')
reason = ''
super_flag = 0


def getfile(): #get path from winform c/receipys = default
	# return all files as a list
	mypath = ''
	for file in os.listdir(r'C:/receipts'):
		# check the files which are end with specific extension
		if file.endswith(".Pdf"):
			mypath = os.path.join(r'C:/receipts', file)
			# print path name of selected files
			# print(os.path.join(r'C:/receipts', file))
		if file.endswith(".pdf"):
			mypath = os.path.join(r'C:/receipts', file)
			# print path name of selected files
			# print(os.path.join(r'C:/receipts', file))
		if file.endswith(".PDF"):
			# print path name of selected files
			mypath = os.path.join(r'C:/receipts', file)
			# print(os.path.join(r'C:/receipts', file))
	return mypath

pathfromc2 = "c:/receipts"
IN_FILEPATH = getfile()

#IN_FILEPATH = "c:/receipts/receipt.pdf"
with pdfplumber.open(IN_FILEPATH) as pdf:
    page = pdf.pages[0]
    text = page.extract_text()
    rsrcmgr = PDFResourceManager()
    retstr = io.StringIO()
    codec = 'utf-8'
    laparams = LAParams()
    device = TextConverter(rsrcmgr, retstr, codec=codec, laparams=laparams)
    fisc = text
    #print(text)
    pdf.close()
    #with Path('c:/receipts/receipt.txt').open(mode='+wt', newline='\r\n') as output_file:
        #output_file.write(text)
#print(fisc)
inv = fisc

lines = inv.split('\n')

if lines.__contains__('This document was created with the Win2PDF'):
    licencem = 'skip'
#get desc
def getreason(k):
    y="Reason"
    for k in lines:
        if k.__contains__('Reason'):
            i = k.index('Reason')+6
            y = k[:i].strip()
    return y
reason = getreason(lines)
def getitemname(k):
    #k = k[:30]
    y = k.rindex(' ')
    k = k[:y]
    i = k.rindex(' ')
    k = k[:i].strip()
    ii = k.rindex(' ')
    k = k[:ii].strip()
    j = k.rindex(' ')
    k = k[:j].strip()
    #jj = k.index(' ')
    #k = k[jj:].strip()

    return k

#get desc
def getqty(k):
    y = k.rindex(' ')
    k = k[:y]
    i = k.rindex(' ')
    k = k[:i].strip()
    ii = k.rindex(' ')
    k = k[:ii].strip()
    j = k.rindex(' ')
    k = k[j:].strip()
    #i = j.rindex(' ')
    k = laundry(k)
    #h = j[:i]
    #k = h.rindex(' ')
    #kkk = h.rindex(' ')
    #h = h[:kkk].strip()
    #o = h.rindex(' ')
    #h = h[o:].strip()

    return k



def getcash(k):
    #c = getqty(j)
    #d = getitemname(j)
    #h = j.replace(c,'')
    #h = h.replace(d,'').strip()
    y = k.rindex(' ')
    k = k[:y].strip()
    i = k.rindex(' ')
    k = k[:i].strip()
    #print(k)
    ii = k.rindex(' ')
    k = k[ii:].strip()
    #kk = h.rindex(' ')
    #h = h[:kk].strip()
    #print(h)
    #o = h.rindex(' ')
    #h = h[o:].strip()
    k = laundry(k)
    return k

def gettaxg(j):
    j.strip()
    i = j.rindex(' ')
    h = j[:i].strip()
    k = h.rindex(' ')
    h = h[k:].strip()
    if h == '15.00%':
        taxg = '1'
    if h == 'EX':
        taxg = '3'
    if h == '0.00%':
        taxg = '2'
    return taxg
#clean amounts


def laundry(k):
    k = re.sub('[a-z]', '', k)
    k = re.sub('[A-z]', '', k)
    k = k.replace('#','')
    k = k.replace(' ', '')
    k = k.replace(',', '')
    k = k.replace('-', '')
    k = k.replace('(', '')
    k = k.replace(')', '')
    k = k.replace('*', '')
    k = k.replace('$', '')
    k = k.replace('%', '')
    k = k.replace('@', '')
    k = k.replace('=', '')
    k = k.replace('/', '')
    k = k.replace('\\', '')
    k = k.replace(':', '')
    k = k.replace(';', '')

    return k
#clean amounts
def laundryspecial(k):
    k = re.sub('[a-z]', '', k)
    k = re.sub('[A-z]', '', k)
    k = k.replace('#', '')
    k = k.replace(' ', '')
    k = k.replace(',', '.')
    k = k.replace('-', '')
    k = k.replace('(', '')
    k = k.replace(')', '')
    k = k.replace('*', '')
    k = k.replace('$', '')
    k = k.replace('%', '')
    k = k.replace('@', '')
    k = k.replace('=', '')
    k = k.replace('/', '')
    k = k.replace('\\', '')
    k = k.replace(':', '')
    k = k.replace(';', '')

    return k

#get doc type

def getdoc():
    doc = 1
    for line in lines:
        #if re_line.search(line):

        if line.__contains__(credit):
            doc = 2
            break
        if line.__contains__(fiscinv):
            doc = 1
            break
        if line.__contains__(debit):
            doc = 3
            break
    return doc


def getbuyeraddress():
    bflag = 0
    buyeradd = ''
    for line in lines:
        # if re_line.search(line):

        if line.__contains__(badd):
            y = line.index(badd)
            k = line[y:].strip()
            k = k.replace(badd, '').strip()
            k = k.replace('Currency:', '').strip()
            k = k.replace('ZWL', '').strip()
            k = k.replace('USD', '').strip()
            #z = k.index('Sales')
            #k = k[:z].strip()
            #print(k)
            if k == '':
                buyeradd = 'Address'
            else:
                buyeradd = k
                break



    return buyeradd
def getbuyername():
    bflag = 0
    buyername = ''
    for line in lines:
        #if re_line.search(line):

        if line.__contains__(bname):

            bflag = 1


        if bflag == 1:
            if not line.__contains__(bname):
                buyername = line.strip()
                #k = buyername.index('Date')
                #buyername = buyername[:k]
                buyername = buyername.replace('Invoice Currency','').strip()
                buyername = buyername.replace('USD', '').strip()
                buyername = buyername.replace('ZiG', '').strip()
                break

    return buyername

def gettin():
    k = ''
    for line in lines:
        if btin in line:
            k = line
            #k = k.replace(btin, '').strip()
            k = k.split('.')[1]
            #print(k)
        k = laundry(k)
        if k.__len__() < 10:
            k = '1234567890'
    return k

def getvat():
    k = ''
    for line in lines:
        if bvat in line:
            k = line
            # k = k.replace(btin, '').strip()
            k = k.split('.')[1]
            #print(k)
        k = laundry(k)
        if k.__len__() < 9:
            k = '123456789'
    return k

def getreason():
    k = ''
    for line in lines:
        if line.__contains__('\"'):

            k = line.split('\"')[1].strip()
            break
    return k
docx = str(getdoc())
bnamex = str(getbuyername())
baddx = 'address'

try:
    bvatx = str(getvat())
except:
    bvatx = '123456789'

try:
    btinx = str(gettin())
except:
    btinx = '1234567890'
#bvatx = '123456789'


#doc type
###### currency A
def getcurrencyA():
    curr = 1
    for line in lines:
        #if re_line.search(line):
        if line.__contains__(ZWL):
            curr = 1
            break
        if line.__contains__(USD):
            curr = 2
            break
        if line.__contains__(RAND):
            curr = 3
            break
        if line.__contains__(PULA):
            curr = 4
            break
    return curr

######get currency A


#######get currency B
def getcurrencyB():
    cur =1
    flag= 0
    for line in lines:
        if flag == 9:
            break
        if conset['breakpoint'] in line:
            flag =1
        if flag == 1:
            if line.__contains__(USD):
                cur = 1
                flag = 9
            if line.__contains__(RAND):
                cur = 3
                flag = 9
            if line.__contains__(PULA):
                cur = 3
                flag = 9
    return cur

#currency = str(getcurrencyB())



currency = str(getcurrencyA())




##### get currency B

#get INVOICENUMBER A
def invoicenumd():
    num = ''

    if debit_numm == 'dt':
        num_dt= str(my_time)
        #print(num)
        forcestop = 0;
        num_dtx = num_dt.replace(':','_')
        num_dt = num_dt.split('-')[0].strip()
        for line in lines:
            if forcestop == 0:
                if line.__contains__(num_dt):
                    line = line.replace(num_dt, '>')
                    # num1 = line.index(invoicenum) + len(invoicenum) + 1
                    num = line.split('>')[1].strip().split(' ')[0]
                    num = num.replace('/', '_')
                    num = num.replace(':', '_')
                    forcestop = 2

        if num == '':
            num = num_dtx

    else:
        for line in lines:
            if line.__contains__(debit_numm):
                line = line.replace(debit_numm, '>')
                #num1 = line.index(invoicenum) + len(invoicenum) + 1
                num = line.split('>')[1].strip().split(' ')[0]
                num = num.replace('/','_')
                num = num.replace(':','_')

    return num
def invoicenumc():
    num = ''

    if credit_numm == 'dt':
        num_dt= str(my_time)
        #print(num)
        forcestop = 0;
        num_dtx = num_dt.replace(':','_')
        num_dt = num_dt.split('-')[0].strip()
        for line in lines:
            if forcestop == 0:
                if line.__contains__(num_dt):
                    line = line.replace(num_dt, '>')
                    # num1 = line.index(invoicenum) + len(invoicenum) + 1
                    num = line.split('>')[1].strip().split(' ')[0]
                    num = num.replace('/', '_')
                    num = num.replace(':', '_')
                    forcestop = 2

        if num == '':
            num = num_dtx

    else:
        for line in lines:
            if line.__contains__(credit_numm):
                line = line.replace(credit_numm, '>')
                #num1 = line.index(invoicenum) + len(invoicenum) + 1
                num = line.split('>')[1].strip().split(' ')[0]
                num = num.replace('/','_')
                num = num.replace(':','_')

    return num
def invoicenum():
    num = ''

    if invoice_num == 'dt':
        num_dt= str(my_time)
        #print(num)
        forcestop = 0;
        num_dtx = num_dt.replace(':','_')
        num_dt = num_dt.split('-')[0].strip()
        for line in lines:
            if forcestop == 0:
                if line.__contains__(num_dt):
                    line = line.replace(num_dt, '>')
                    # num1 = line.index(invoicenum) + len(invoicenum) + 1
                    num = line.split('>')[1].strip().split(' ')[0]
                    num = num.replace('/', '_')
                    num = num.replace(':', '_')
                    forcestop = 2

        if num == '':
            num = num_dtx

    else:
        for line in lines:
            if line.__contains__(invoice_num):
                line = line.replace(invoice_num, '>')
                #num1 = line.index(invoicenum) + len(invoicenum) + 1
                num = line.split('>')[1].strip().split(' ')[0]
                num = num.replace('/','_')
                num = num.replace(':','_')

    return num

if docx == '1':
    innum = invoicenum()
if docx == '2':
    innum = invoicenumc()
if docx == '3':
    innum = invoicenumd()
with open(f"c:/cc300_interface/setup/fiscal.prn", "r") as file:
    checkinv = file.read()

    compareinv = checkinv

    checklines = compareinv.split('\n')
    for k in checklines:
        if innum == k:
            super_flag = 1
    file.close()
    if super_flag == 0:
        with open(f"c:/cc300_interface/setup/fiscal.prn", "a") as file:
            file.write(str(innum) + '\n')

            file.close()

def getzimracr():
    num2 = ''
    for line in lines:
        if line.__contains__(zimracr):
            line = line.replace(zimracr, '>')
            # num1 = line.index(invoicenum) + len(invoicenum) + 1
            num2 = line.split('>')[1].strip().split(' ')[0]
            num2 = num2.split('/')[1].strip()
            num2 = num2.replace('/', '_')
            #print(num2)
            #y = num2.index('Day:')
           # num2 = line[y:].strip()
            num2 = num2.replace(':', '_')


    return num2

def getzimradb():
    num3 = ''
    for line in lines:
        if line.__contains__(zimradb):
            line = line.replace(zimradb, '>')
            # num1 = line.index(invoicenum) + len(invoicenum) + 1
            num3 = line.split('>')[1].strip().split(' ')[0]
            num3 = num3.split('/')[1].strip()
            num3 = num3.replace('/', '_')
            num3 = num3.replace(':', '_')

    return num3

def getzimraday():
    num4 = ''
    for line in lines:
        if line.__contains__(daynum):
            line = line.replace(daynum, '>')
            # num1 = line.index(invoicenum) + len(invoicenum) + 1
            num4 = line.split('>')[1].strip().split(' ')[0]
            #num4 = num4.replace('/', '_')
            #num4 = num4.replace(':', '_')
    #if num4 == '':
        #num4 = '0'
    return num4



#if docx == 2:
#    globnumx = str(getzimracr())
#if docx == 3:
#    globnumx = str(getzimradb())
#print((innum))
#(innum)

#get INVOICENUMBER A

#TOTAL
def invtotal():
    tot = ''
    for line in lines:
        #print(line)
        if line.__contains__(totot):

            line = line.replace(totot, '>')
            #print(line)
            #remove , - $ all letters
            #num1 = line.index(invoicenum) + len(invoicenum) + 1
            tot = line.split('>')[1].strip()
            #print('tot = ' + tot)
            tot = laundry(tot)
            #print('tot = '+ tot)
    return tot

def gethighestamt():
    b = 0
    cash_t = 0
    final_cash = 0
    for line in lines:
        if conset['breakpoint'] in line:
            b = 1
        if b == 1:
            if re_linespecial.search(line):
                tot_arr = [line.split(' ')]
                codextot = tot_arr[0]
                # print(codex[-1])
                # linetax = codex[-2]
                # linetax = linetax.replace('%', '')
                linetotal_tot = codextot[-1]
                linetotal_tot = laundry(linetotal_tot)
                #print(linetotal_tot)
                cash_t = float(linetotal_tot)

                if final_cash < cash_t:
                    final_cash = cash_t

    return final_cash

total = gethighestamt()
#total = invtotal()
#TOTAL
if docx == '2':
    globnumx = str(getzimracr())
    #globnumd = str(getzimradb())
    daynumx = getzimraday()
if docx == '3':
    #globnumx = str(getzimracr())
    daynumx = getzimraday()
    globnumx = str(getzimracr())
    #print(globnumx)
if super_flag == 0:
    with open(f"c:/receipts/unprocessed/"+innum + ".prn", "w") as file:
        if docx == '2':
            file.write("##DLRWF##" + reason + "#" + '\n')
            file.write("#*" + docx + "#1#" + operator + "##" + currency + "#" + innum + "#" + '\n')
            file.write("#@#" + globnumx + "#" + daynumx + "#"'\n')
        if docx == '1':
            file.write("##DLRWF##" + '\n')
            file.write("#*" + docx + "#1#" + operator + "##" + currency + "#" + innum + "#" + '\n')
            file.write("#!" + btinx + "#" + bnamex + "#" + baddx + "#Additionaldata#" + bvatx + "##"'\n')
        if docx == '3':
            file.write("##DLRWF##" + reason + "#" + '\n')
            file.write("#*" + docx + "#1#" + operator + "##" + currency + "#" + innum + "#" + '\n')
            file.write("#@#" + globnumx + "#" + daynumx + "#"'\n')
       # if not btinx == '':

        #else:
          #  file.write("#!1234567890#" + bnamex + "###123456789##"  '\n')

        file.close()
    for line in lines:
        if conset['breakpoint'] in line:
            break
        if 'BANKING DETAILS' in line:
            break
        if 'Description' in line:
            flag1 = 1
            #print('desc')
        #if re_line.search(line):
        if flag1 == 1:
            if 'Description' in line:
              continue
            if len(line) < 10:
                continue

            if mytax ==0:
               # line_arr = [line.split(' ')]
               # codex = line_arr[0]
                # print(codex[-1])
                #linetax = codex[-2]
                #linetax = linetax.replace('%', '')
               # linetotal = codex[-1]
               # linetotal = laundryspecial(linetotal)

               cashindex = line.rindex('.') + 3

               linetotal = line[cashindex:]

               linetotal = laundryspecial(linetotal)

               cash = float(linetotal)
               linetaxg = '2'
            if typex == '4':
                cashindex = line.rindex('.') + 3

                linetotal = line[cashindex:]

                linetotal = laundryspecial(linetotal)

                cash = float(linetotal)
                linetaxg = '2'
                try:
                    if float(linetax) > 0:
                        linetaxg = '2'
                        if conset['inc amount'] == '0':
                            cash = cash * float(conset['addvat'])
                except:
                    if line.__contains__(conset['taxtag']):
                        linetaxg = '1'
                    else:
                        linetaxg = '2'

            if typex == '1':
                try:
                    linetaxg = gettaxg(line)
                    # print(line)
                except:
                    continue
                cashxx = getcash(line)
                # print(cashxx)

                #cash = math.floor(cash* 100)/100
                item = getitemname(line)
                # print(item)
                qty = getqty(line)
                if linetaxg == '1':
                    cashxxx = float(cashxx) * float(conset['addvat'])
                    cashxxx = math.floor(cashxxx * 1000) / 1000
                    #print(cashxxx)
                    cashxx = str(cashxxx)
            with open(f"c:/receipts/unprocessed/" + innum + ".prn", "a") as file:
                #file.write("#^#" + item + "#" + str(cash) + "#1#" + str(linetaxg) + "#" + currency  + "#" + '\n')
                file.write("#^1#" + item + "#" +cashxx + "#" + qty+ "#" +linetaxg+ "#0#" '\n')
                file.close()

    with open(f"c:/receipts/unprocessed/"+innum + ".prn", "a") as file:
        if docx == '1':
            file.write("#$" + "1#" + str(total) + "#" + '\n')
        else:
            file.write("#| credit or debit" + docx+"" '\n')
        file.close()


    '''def getsig():
        #print('sig callled')
        
        #print('sig executing')
        if os.path.isfile("c:/receipts/processed/" +innum+ ".html"):
            with open("c:/receipts/processed/" +innum+ ".html") as filee:
                mystr = filee.read()
                siglines = mystr.split('\n')
                for sig in siglines:
                    if sig.__contains__('Device date:'):
                        sigdate = sig
                        sigdate = sigdate.replace('<p>', ' ').strip()
                        sigdate = sigdate.replace('</p>', ' ').strip()
                        sigdate = sigdate.replace('<br />', ' ').strip()
                        sigdate = sigdate.replace('Device date:', ' ').strip()
                    if sig.__contains__('Device Serial No:'):
                        sigser = sig
                        sigser = sigser.replace('<p>', ' ').strip()
                        sigser = sigser.replace('</p>', ' ').strip()
                        sigser = sigser.replace('<br />', ' ').strip()
                        sigser = sigser.replace('Device Serial No:', ' ').strip()
                    if sig.__contains__('Verifcation code:'):
                        sigver = sig
                        sigver = sigver.replace('<p>', ' ').strip()
                        sigver = sigver.replace('</p>', ' ').strip()
                        sigver = sigver.replace('<br />', ' ').strip()
                        sigver = sigver.replace('Verifcation code:', ' ').strip()
                    if sig.__contains__('Device ID:'):
                        sigid = sig
                        sigid = sigid.replace('<p>', ' ').strip()
                        sigid = sigid.replace('</p>', ' ').strip()
                        sigid = sigid.replace('<br />', ' ').strip()
                        sigid = sigid.replace('Device ID:', ' ').strip()
                    if sig.__contains__('Invoice No:'):
                        siginv = sig
                        siginv = siginv.replace('<p>', ' ').strip()
                        siginv = siginv.replace('</p>', ' ').strip()
                        siginv = siginv.replace('<br />', ' ').strip()
                        siginv = siginv.replace(sigser, ' ').strip()
                        siginv = siginv.replace('Invoice No:', ' ').strip()
                    if sig.__contains__('Signature:'):
                        signature = sig
                        signature = signature.replace('<p>',' ').strip()
                        signature = signature.replace('</p>', ' ').strip()
                        signature = signature.replace('<br />', ' ').strip()
                        signature = signature.replace('Signature:',' ').strip()
    
    
                if signature != ' ':
                    if currency == '1':
                        cashp = 'ZWL'
                    if currency == '2':
                        cashp = 'USD'
                    if currency == '3':
                        cashp = 'RAND'
                    if currency == '4':
                        cashp = 'PULA'
    
    
                   # sigfinal = 'Signature: ' + signature + '_' + sigdate + '_' + sigser + '_' + cashp
                    sigfinal = 'https://fdmstest.zimra.co.zw/00000082551502202400000000016C69E84C86746434'
                else:
                    sigfinal = 'no signature returned check file driver err occured#efr@'
                    #print('no signature returned check file driver')
                #print(mystr2[-1])
            filee.close()
        else:
            sigfinal = 'wuioww.frs.co.zw  jklno signature returned check file driver err occured#efr@'
            #print(sig)
        return sigfinal'''



    time.sleep(float(default_delay))
    if os.path.isfile("c:/receipts/processed/" + innum + ".html"):
        with open("c:/receipts/processed/" + innum + ".html") as filee:
            mystr = filee.read()
            siglines = mystr.split('\n')
            for sig in siglines:
                if sig.__contains__('Day nom:'):
                    sigdate = sig
                    sigdate = sigdate.replace('<p>', ' ').strip()
                    sigdate = sigdate.replace('</p>', ' ').strip()
                    sigdate = sigdate.replace('<br />', ' ').strip()
                    sigdate = sigdate.replace('Day nom:', ' ').strip()
                if sig.__contains__('Device serial:'):
                    sigser = sig
                    sigser = sigser.replace('<p>', ' ').strip()
                    sigser = sigser.replace('</p>', ' ').strip()
                    sigser = sigser.replace('<br />', ' ').strip()
                    sigser = sigser.replace('Device serial:', ' ').strip()
                if sig.__contains__('Verification code:'):
                    sigver = sig
                    sigver = sigver.replace('<p>', ' ').strip()
                    sigver = sigver.replace('</p>', ' ').strip()
                    sigver = sigver.replace('<br />', ' ').strip()
                    sigver = sigver.replace('Verification code:', ' ').strip()
                if sig.__contains__('Device id:'):
                    sigid = sig
                    sigid = sigid.replace('<p>', ' ').strip()
                    sigid = sigid.replace('</p>', ' ').strip()
                    sigid = sigid.replace('<br />', ' ').strip()
                    sigid = sigid.replace('Device id:', ' ').strip()
                if sig.__contains__('Reciept num:'):
                    siginv = sig
                    siginv = siginv.replace('<p>', ' ').strip()
                    siginv = siginv.replace('</p>', ' ').strip()
                    siginv = siginv.replace('<br />', ' ').strip()
                    #siginv = siginv.replace(sigser, ' ').strip()
                    siginv = siginv.replace('Reciept num:', ' ').strip()
                if sig.__contains__('id="url"'):
                    signature = sig
                    signature = signature.replace('<p', ' ').strip()
                    signature = signature.replace('</p', ' ').strip()
                    signature = signature.replace('>', ' ').strip()
                    signature = signature.replace('<br />', ' ').strip()
                    signature = signature.replace('id="url"', ' ').strip()
                    k  = len(signature)
                    verification = signature[k-16:]
                    sigver = verification

                    c = signature.rindex('/') + 1
                    sigurl = signature[:c]
            if signature != ' ':
                if currency == '1':
                    cashp = 'ZWL'
                if currency == '2':
                    cashp = 'USD'
                if currency == '3':
                    cashp = 'RAND'
                if currency == '4':
                    cashp = 'PULA'

                # sigfinal = 'Signature: ' + signature + '_' + sigdate + '_' + sigser + '_' + cashp
                sigfinal = signature
            else:
                sigfinal = 'no signature returned check file driver err occured#efr@'
                # print('no signature returned check file driver')
            # print(mystr2[-1])
        filee.close()
    else:
        sigfinal = 'wuioww.frs.co.zw  jklno signature returned check file driver err occured#efr@'
    #mysignature = getsig()
    if sigfinal.__contains__("err occured#efr@"):
        global_flag = 1

    if global_flag == 0:

        qr = qrcode.QRCode(version=1, box_size = 2, border = 0)
        qr.add_data(sigfinal)
        qr.make(fit = True)

        image = qr.make_image(fill= "black",back_color = "white")

        image.save("c:/cc300_interface/setup/qrcode.png")


    else:
        with open(f"c:/cc300_interface/temp/err.prn", "w") as file:
            file.write("check unprocessed folder" + '\n')
            file.close()

    # IN_FILEPATH = "c:/receipts/receipt.pdf"
    OUT_FILEPATH = "c:/receipts/signed invoices/" + innum + "_" + str(my_timestr) + ".pdf"
    TO_PRINTPATH = "c:/cc300_interface/setup/TOPRINT.pdf"
    ON_PAGE_INDEX = 0  # Index of the target page (starts at zero)


    def new_content():
        from fpdf import FPDF
        class FPDF(FPDF):

            def footer(self):
                mysig = signature
                # Go to 1.5 cm from bottom
                self.set_y(botint)
                # Select Arial italic 8
                self.set_font('times', '', 9)
                # Print centered page number
                if sigPositon == 'T':
                    mysig = " "
                if sigPositon == 'B':
                    Image.open("c:/cc300_interface/setup/qrcode.png")
                    # image = "qrcode.png"
                    image = "c:/cc300_interface/setup/qrcode.png"
                    pdf1.image(image, x=topintx - xoffset, y=botint)
                    self.cell(0, 10, mysig, 'C')

            def header(self):
                mysig = signature
                self.set_y(topint + 1)
                self.set_x(topintx)
                self.set_font('helvetica', '', 8)
                # Move to the right
                # Framed title
                if sigPositon == 'B':
                    mysig = " "
                if sigPositon == 'T':
                    Image.open("c:/cc300_interface/setup/qrcode.png")
                    # image = "qrcode.png"
                    image = "c:/cc300_interface/setup/qrcode.png"
                    pdf1.image(image, x=topintx + 4 , y=topint)
                    self.cell(0, 0, 'Verification code :' + sigver, 'C')
                    self.set_y(topint + 4.6)
                    self.set_x(topintx)
                    self.cell(0, 0, 'Fiscal device ID :' + sigid, 'C')
                    self.set_y(topint + 8.2)
                    self.set_x(topintx)
                    self.cell(0, 0, 'Fiscal Day No. : ' + sigdate, 'C')
                    self.set_y(topint + 11.8)
                    self.set_x(topintx)
                    self.cell(0, 0, 'Zimra Invoice No. :' + siginv, 'C')
                    self.set_y(topint + 15.4)
                    self.set_x(topintx)
                    self.cell(0, 0, 'You can verify this invoice manually at', 'C')
                    self.set_y(topint + 19)
                    self.set_x(topintx)
                    self.cell(0, 0, sigurl, 'C')
                    self.set_y(topint + 22.6)
                    self.set_x(topintx)
                    self.cell(0, 0, 'Device Serial No. :' + sigser, 'C')
                # Line break

        pdf1 = FPDF("P","mm","A4")

        pdf1.add_page()
        #pdf1.set_margins(0,0,0)
        pdf1.set_font('helvetica', '', 8)
        Image.open("c:/cc300_interface/setup/qrcode.png")
        # image = "qrcode.png"
        image = "c:/cc300_interface/setup/qrcode.png"
        pdf1.image(image, x=topintx - xoffset, y=topint )
        pdf1.cell(0, 0, 'Verification code :' + sigver, 'C')
        pdf1.set_y(topint + 4.6)
        pdf1.set_x(topintx)
        pdf1.cell(0, 0, 'Fiscal device ID :' + sigid, 'C')
        pdf1.set_y(topint + 8.2)
        pdf1.set_x(topintx)
        pdf1.cell(0, 0, 'Fiscal Day No. : ' + sigdate, 'C')
        pdf1.set_y(topint + 11.8)
        pdf1.set_x(topintx)
        pdf1.cell(0, 0, 'Zimra Invoice No. :' + siginv, 'C')
        pdf1.set_y(topint + 15.4)
        pdf1.set_x(topintx)
        pdf1.cell(0, 0, 'You can verify this invoice manually at', 'C')
        pdf1.set_y(topint + 19)
        pdf1.set_x(topintx)
        pdf1.cell(0, 0, sigurl, 'C')
        pdf1.set_y(topint + 22.6)
        pdf1.set_x(topintx)
        pdf1.cell(0, 0, 'Device Serial No. :' + sigser, 'C')


       # pdf.set_font('times', '', 8)
       # pdf.cell(300,-220, mysignature, align='L')

        return pdf1.output()

    if global_flag == 0:
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


        os.remove("c:/cc300_interface/setup/qrcode.png")
        shutil.copy(OUT_FILEPATH, TO_PRINTPATH)

os.remove(IN_FILEPATH)
#print("done")





#arguments = "-print-to \"Microsoft Print to PDF\"  \"" + fileName + "\""
#Process.Start("SumatraPDF.exe", arguments);



