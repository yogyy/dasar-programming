// for in
const person = {
    fname : "Lucifer",
    mname : "Morningstar",
    lname : 'BloodyHell'

}
for(const property in person){
    document.writeln(`<p>${property} : ${person[property]}</p>`)
}

        document.write(`<br>`)


// for in array
const namep = ["Muhammad","yogi","firman","syah"]
for(const index in namep){
    document.writeln(`<p>${index} : ${namep[index]}</p>`)
}

        document.write(`<br>`)

// for of
const names = ["Lex", "Luthor", "Bruce", "Wayne"]
for(const name of names){
    document.writeln(`<p>${name}</p>`)
}

const fullName = "John Constantine"
for (const x of fullName){
    document.writeln(`<p>${x}</p>`)
}