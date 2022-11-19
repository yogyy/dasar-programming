function createAdder(value){
    const owner = "yow"

    function add(param){
        console.log(owner)
        return value + param
    }
    return add
}

const addTwo = createAdder(2)
// function addTwo(param){
//     console.log("yow")
//     return 2 + param
// }

console.log(addTwo(10))
console.log(addTwo(30))

const addTen = createAdder(10)
console.log(addTen(30))
