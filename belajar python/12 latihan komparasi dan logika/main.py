# episode latihan logika dan komparasi

# membuat gabungan area rentang dari angka

# ++++++3------10+++++

inputUser = float(input("masukan angka yang bernilai\nkurang dari 3\natau\nlebih dari 10 \n:"))

# ++++++3----------------
# memeriksa angka kurang dari 3
isKurangDari = (inputUser < 3)
print("kurang dari 3= ",isKurangDari)


# --------------10+++++++++
# memeriksa angka lebih dari 10
isLebihDari = (inputUser > 10)
print("lebih dari 10= ", isLebihDari)

# ++++++3---------10+++++++

isBenar = isKurangDari or isLebihDari
print("angka yang anda masukan :", isBenar)

# ----------3+++++++++++++10--------
# kasus irisan
print("\n",10*"~","\n")
inputUser = float(input("masukan angka yang bernilai\nlebih dari 3\ndan\nkurang dari 10 \n:"))

# ------3++++++++++++++++++
# lebih dari 3
isLebihDari = inputUser > 3
print("lebih dari 3 = ",isLebihDari)

# +++++++++++++10--------
# kurang dari 10
isKurangDari = inputUser < 10
print ("kurang dari 10 = ",isKurangDari)

# ----------3+++++++++++++10--------
isBenar = isKurangDari and isLebihDari
print("angka yang anda masukan :", isBenar)
