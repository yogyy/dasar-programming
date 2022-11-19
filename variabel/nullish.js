let parameter = "Cooooooooooooop"

// if statement
let data = parameter
if(data === undefined || data === null){
    data = "Nilai Defaulf"
}
document.writeln(`<p>${data}</p>`)



// nullish coalescing operator
data = parameter ?? "Nilai Default"
document.writeln(`<p>${data}</p>`)