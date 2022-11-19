
let arrayKosong = []

let arrayNama = ["Batman", "Joker", "Louis", 9999]
console.table(arrayNama)


const names = []

names.push("Constantine")
names.push("luthor", "Morningstar", "Lucy")
console.table(names)


console.info(names[0])
console.info(names[1])
console.info(names[2])
console.info(names[3])

names[1] = "Brightburn"
console.table(names)

delete names[2]
names.push(1,2,3,4,5)
console.table(names)

names.push(["dimas", "anjay", "mabar"])
console.table(names)







document.writeln(names[9])
