# operasi dan manipulasi string

# 1. menyambung string (concatenante)
nama_pertama = 'Lucifer'
nama_kedua = 'Morning'
nama_akhir = 'Star'
nama_lengkap = nama_pertama+ ' ' + nama_kedua + nama_akhir
print(nama_lengkap)

# 2. menghitung panjang string
panjang = len(nama_lengkap)
print('panjang dari ' + nama_lengkap + '=' + str(panjang))

# 3. opeartor untuk string

# mengecek apakah ada komponen char atau string di string

d = 'star'
status = d in nama_lengkap
print(d + ' ada di ' + nama_lengkap + ' = ' + str(status))

d = 'Star'
status = d in nama_lengkap
print(d + ' ada di ' + nama_lengkap + ' = ' + str(status))

d = 'star'
status = d not in nama_lengkap
print(d + ' ada di ' + nama_lengkap + ' = ' + str(status))

# mengulang string
print('~'*40)
print(40*'~')

# indexing
print('index ke-0 : ' + nama_lengkap[0])
print('index ke-7 : ' + nama_lengkap[6])
print('index ke-(-1) : ' + nama_lengkap[-1]) 
print('index ke-(-2) : ' + nama_lengkap[-2])
print('index ke-[0:4] : ' + nama_lengkap[0:4])
print('index ke-[8:15] : ' + nama_lengkap[8:15])

# item paling kecil
print('paling kecil : ' + min(nama_lengkap))
# item paling besar
print('paling besar : ' + max(nama_lengkap))

ascii_code = ord(' ')
print('ASCII code untuk spasi adalah ' + str(ascii_code))
data = 117
print('char untuk ASCII code 117 adalah ' + chr(data)) 

# 4. operator dalam bentuk method

data = 'Lucifer Bloody Hell'
jumlah = data.count('o')
print('jumlah o pada adalah ' + data + ' = ' + str(jumlah))