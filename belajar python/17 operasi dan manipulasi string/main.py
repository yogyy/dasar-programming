# operator dalam bentuk methods

## merubah case dari string

# merubah semua ke upper case

salam = 'bro!'
print('normal = ' + salam)
salam = salam.upper()
print('upper = ' + salam)

# merubah semua ke lower case
donat = 'KEnapA DoNaT BoLONg'
print('normal = ' + donat)
donat = donat.lower()
print('lower = ' + donat)

## pengecekan dengan isX method

# contoh pengecekan lower case
salam = "hello"
apakah_lower = salam.islower() # hasilnya boolean
print(salam + ' is lower = ' + str(apakah_lower))
apakah_upper = salam.isupper() # hasilnya boolean
print(salam + ' is upper = ' + str(apakah_upper))

# isalpha() <-- untuk mengecek semuanya huruf
# isnum() <-- untuk mengecek semuanya angka
# isdecimal() <-- angka saja
# isspace() <-- spasi, tab, newline \n
# istitle() <-- semua kata dimulai dengan huruf besar

judul = 'The Lord Of The Rings'
cek_judul = judul.istitle()

print(judul + ' is tittle = ' + str(cek_judul))

## mengecek komponen starswith() endswith() <--
cek_start = 'John Constantine'.startswith('John')
print('start = ' + str(cek_start))
cek_end = 'Oliver Queen'.endswith('Queen')
print('start = ' + str(cek_end))

## penggabungan komponen join() split()
pisah = ['aku','sayang','kamu']
gabungan = ','.join(pisah)
print(pisah)
print(gabungan)

gabungan = ' '.join(pisah)
print(gabungan)

gabungan = ' ehm '.join(pisah)
print(gabungan)

gabungan = 'akuehmsayangehmkamu'
print(gabungan.split('ehm'))

# alokasi karakter rjust(), ljust(), center()
kanan = 'kanan'.rjust(10,'|')
print('"'+kanan+'"')
kiri = 'kiri'.ljust(10,'|')
print('"'+kiri+'"')
tengah = 'tengah'.center(20,'|')
print('"'+tengah+'"')

# kebalikannya -> strip()
tengah = tengah.strip('|') # menghilangkan tanda |
print('"'+tengah+'"')

# masih banyak yang lain