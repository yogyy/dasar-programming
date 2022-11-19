const person= {
    
    firstName: "Lucifer",
    lastName: "Morningstar"
}

if ("firstName" in person) {
    alert(`Hello ${person.firstName}`)
} else {
    alert(`Hello`)
}

const student = {
    firstName : "Bloody",
    middleName : undefined,
    lastName : "Hell"
}

if ("middleName" in student){
    alert(`Hello ${student.middleName}`)
} else {
    alert("Hello Student")
}

const names = [null, "Constantin", null]
const result = 2 in names
document.writeln(`<p>${result} ${names[1]}</p>`)