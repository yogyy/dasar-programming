// global scope
let counter = 0

function hitMe(){
    // local scope hitMe
    counter ++
}

hitMe()
hitMe()
console.log(counter)


function first(){
    // local scope first
    let firstVariable = "first"

    function firstNested(){
        console.log(firstVariable)
    }

    firstNested() 
}


function second(){
    // local scope second
    let secondVariable = "second"
}


first()
second()

console.log(firstVariable)  // ERROR
console.log(secondVariable)  // ERROR