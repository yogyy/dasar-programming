# width and multiline

# data

data_nama = "John Constatine"
data_umur = 20
data_tinggi = 170.3
data_sepatu = 45

# string
data_string = f"nama = {data_nama}, umur = {data_umur}, tinggi = {data_tinggi}, sepatu = {data_sepatu}"
print(5*"="+"Data String"+5*"=")
print(data_string)

# string multiline (dengan menggunakan enter, newline, \n)
data_string = f"nama = {data_nama}, \numur = {data_umur}, \ntinggi = {data_tinggi}, \nsepatu = {data_sepatu}."
print('\n'+5*"="+"Data String Multiline"+5*"=")
print(data_string)

# string multiline (kutip triplets)

data_string = f"""nama= {data_nama}, 
umur = {data_umur}, 
tinggi = {data_tinggi}, 
sepatu = {data_sepatu}.
"""
print('\n'+5*"="+'Data String """'+5*"=")
print(data_string)

# mengatur lebar
data_nama = "Oliver Queen" 
data_string = f"""--------------------
nama    = {data_nama:>5}
umur    = {data_umur:>5}
tinggi  = {data_tinggi:>5}
sepatu  = {data_sepatu:>5}
"""
print('\n'+5*"="+'Data String'+5*"=")
print(data_string)