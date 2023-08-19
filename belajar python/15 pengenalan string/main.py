data = "ini adalah string"
print(data)
print(type(data))

# 1. cara membuat string

'''
    1. dengan menggunakan single quote '....'
    2. dengan menggunakan double quote "...."
'''

data = 'Menggunakan single quote'
print(data)

data = "Menggunakan double quote"
print(data)


print('"Halo, apa kabar?"')
print("'Halo, apa kabar?'")
print("ini adalah hari jum'at")

# 2. Menggunakan tanda \

# membuat tanda ' menjadi string
print('mari shalat jum\'at')
print('g\'day isn\'t it?')

# backslash \\
print("C:\\User\\yogy")

# tab \t
print("John\tConstantine")

# backspace \b
print('Quentin Cold \bwater')

# newline
print('baris pertama.\nbaris kedua.') # LF -> line feed -> unix, macOS,linux
print('baris pertama.\rbaris kedua.') # CR -> carriage return -> commodore, acorn, 
print('baris pertama.\r\nbaris kedua.') # CRLF -> line feed carriage return -> windows

# 3. Stirng literal atau raw

# hati-hati
print('C:\new folder') # akan salah pathnya

# menggunakan raw string (r)
print(r'C:\new folder')

# multiline literal string
print("""
Nama    : Lex Luthor
Kelas   : Villain
Power   : SS
""")

# multiline literal string dan RAW
print(r"""
Nama    : Kal-El
Alias   : Superman
Asal    : K\rypto\n
""")