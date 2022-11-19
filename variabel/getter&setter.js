// getter

const person = {
    firstName : "John",
    lastName : "Constantine",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const array = value.split(" ")
        this.firstName = array[0]
        this.lastName = array[1]
    }
}


document.writeln(person.fullName)

person.fullName = ("Lex Luthor")
console.table(person)