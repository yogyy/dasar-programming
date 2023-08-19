# 1-----0+++++++5--------8+++++++11-------
x = float(input("masukan angka : "))

is1 = (x > 0 and x < 5) or (x > 8 and x < 11)
print('adalah = ',is1)

# 2 +++++0-----5++++++8--------11++++++
x = float(input("masukan angka : "))
is2 = (x and 0, x and 5) and (x and 8 and x > 11)
print('adalah = ',is2)