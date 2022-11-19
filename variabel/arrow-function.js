const sayHello = (name) => {
    const say = `Hello ${name}`
    console.log(say)
}

sayHello("Oww")



// arrow function tanpa block {}

const umur = (old) => console.log(`Umur kamu ${old}`)

umur(20)


const sum = (first, second) => first + second
console.log(sum(100, 10))

const sebutnama = nama => console.log(`Sebutnamaku bang, ${nama}`)
sebutnama("Zet")


// arrow di anonymous
function giveMeName(callback) {
    callback("yogy")
}

giveMeName(name => console.log(`Hello ${name}`))





// object method arrow function
// const person = {
//     name: "yogi",
//     sayHello: (name){
//         console.log(`Hello ${name} my name is ${this.name}`)
//     }
// }

// person.sayHello("There")