const person = {
    address : {
        country : "Wakanda"
    }

}

// if(person.address !== undefined && person.address !== null){
//     country = person.address.country
// }

let country = person?.address?.country // <== optional chaining

document.writeln(`sukses`)
document.writeln(`<p>${country}<p>`)
document.writeln(`sukses`)

