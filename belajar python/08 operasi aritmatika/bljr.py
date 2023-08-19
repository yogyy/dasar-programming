

a= 10
b = 3

# operasi tambah +
hasil = a + b
print (a,'+',b,'=',hasil)

# operasi pengurangan -
hasil = a - b
print (a,'-',b,'=',hasil)

# operasi perkalian *
hasil = a * b
print (a,'*',b,'=',hasil)

# operasi pembagian /
hasil = a / b
print (a,'/',b,'=',hasil)

# operasi eksponen (pangkat) **
hasil = a ** b
print (a,'**',b,'=',hasil)

# operasi modulus %
hasil = a % b
print (a,'%',b,'=',hasil)

# operasi floor division //
hasil = a // b
print (a,'//',b,'=',hasil)

# prioritas opearsi, operational precedence
"""
    1. ()
    2. exponen **
    3. perkalian dan teman-teman  */ ** % //
    4. pertambahan dan pengurangan + - 
"""
x = 3
y = 2
z = 4
print("perhitungan ke 1") 
hasil = x ** y * z + x / y - y % z // x
print(x,'**',y,'*',z,'+',x,'/',y,'-',y,'%',z,'//',x,'=',hasil)
 
print("perhitungan ke 2")
hasil = x + y * z
print(x,'+',y,'*',z,'=',hasil)
print("perhitungan ke 3")
hasil = (x + y) * z
print('(',x,'',x,')*',z,'=',hasil)