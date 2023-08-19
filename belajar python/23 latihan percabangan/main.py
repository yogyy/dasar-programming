# latihan sederhana

# kalkulator sederhana
print(20*'~')
print('kalkulator sederhana')
print(20*'~' + '\n')

angka1 = float(input("maskan angka pertama : "))
operator = input("operator (+,-,*,/) : ")
angka2 = float(input("masukan angka kedua : "))

# percabangannya

if operator == '+':
    hasil = angka1 + angka2
    print(f"hasilnya adalah {hasil}")
elif operator == '-':
    hasil = angka1 - angka2
    print(f"hasilnya adalah {hasil}")
elif operator == 'x' or operator == '*':
    hasil = angka1 * angka2
    print(f"hasilnya adalah {hasil}")
elif operator == '/' or operator == ':':
    hasil = angka1 / angka2
    print(f"hasilnya adalah {hasil}")

print("akhir dari program")