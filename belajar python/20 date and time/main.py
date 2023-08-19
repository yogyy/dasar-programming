# date and time

import datetime as dt

print("silakan masukan tanggal, bulan, dan lahir anda")
tanggal = int(input('Tanggal \t:'))
bulan = int(input('Bulan \t\t:') )
tahun = int(input('Tahun \t\t:'))

tanggal_lahir = dt.date(tahun,bulan,tanggal)
print(f"Tanggal lahir anda adalah :  {tanggal_lahir}")

hari_ini = dt.date.today()
print(f"hari ini tanggal : {hari_ini}")
umur_hari = hari_ini - tanggal_lahir
umur_tahun = umur_hari.days // 365
umur_bulan = umur_tahun * 12

print(f"Hari lahir anda adalah : {tanggal_lahir:%A}")
print(f"umur anda adalah : {umur_tahun} tahun")
print(f"umur anda : {umur_bulan} bulan")

umur_hari1 = hari_ini.year - tanggal_lahir.year 
print(f"umurmu hari ini adalah {umur_hari1} ")