// || OR , truthy
console.log("Hello" || "")
console.log("" || [])
console.log("0" || "NOL")
console.log(0 || "NOL")
console.log(null || "NULL")
console.log(undefined || "UNDEFINED")
console.log(0 || false)

const person = {
    firstName : "Yogi",
    lastName : "F S"
}

const name = person.firstName || person.lastName
console.log(name)

// && AND falsy
console.log("&& AND")
console.log("Hello" && "")
console.log("" && [])
console.log("0" && "NOL")
console.log(0 && "NOL")
console.log(null && "NULL")
console.log(undefined && "UNDEFINED")
console.log(0 && false)
