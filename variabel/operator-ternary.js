const nilai = 82
let ucapan


// if else operator
if (nilai > 75) {
    ucapan = "Selamat anda lulus"
} else {
    ucapan = "Silakan Coba lagi lain waktu"
}

// ternary operator

const nilai1 = 60
const ucapan1 = nilai1 >= 75 ? "Mantap anda lulus" : "NT"


document.writeln(`<p>${ucapan}</p>`)
document.writeln(`<p>${ucapan1}</p>`)