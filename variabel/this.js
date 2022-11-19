console.log(this)

function sample(){          // di function
    console.log(this)

    function inner(){       // di inner function
    console.log(this)
    }
    inner()

}

sample()

const person = {
    name: "yogi",
    sayHello: function (value){
        console.log(`Hello ${value} my name is ${this.name}`)
    }
}

person.sayHello("There")




