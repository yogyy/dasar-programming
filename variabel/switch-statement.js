const nilai = "A"

switch (nilai){
    case "A":
        document.writeln("<p>Selamat anda lulus dengan baik</p>")
        break
    case "B":
        document.writeln("<p>anda lulus</p>")
        break
    case "C":
    case "D":
        document.writeln("<p>Anda tidak lulus</p>")
        break
    default:
        document.writeln("<p>Mungkin anda salah jurusan</p>")
}