function sayHelloWorld(){
    document.writeln("Hello World")
}
function anjay(){
    document.writeln("dimas anjay mabar")
}


sayHelloWorld()
document.writeln("<br>")
anjay()

// function dengan parameter
function sayHello(firstname, lastname){
    document.writeln(`<p>Halo ${firstname} ${lastname}</p>`)
}
sayHello("Lucy", "Morning")
sayHello("Lex", "Luthor")


// function return value

function sayHi(firstNama, lastNama){
    const say = `hai bang ${firstNama} ${lastNama}`
    return say
}

const result = sayHi("yogi" ,"F S")
document.writeln(`<p>${result}</p>`)


function getFinalValue(value){
    if(value >= 90){
        return "A"
    }else if(value >= 80){
        return "B"
    }else if(value >= 70){
        return "C"
    }else if(value >= 60){
        return "D"
    }else {
        return "E"
    }
}

const finalValue = getFinalValue(80)
document.writeln(`<p> nilai akhir anda : ${finalValue}</p>`)


function isContains(array, searchValue){
    for (const element of array){
        console.log(`Iterasi Element ${element}`)
        if (element === searchValue){
            return true
        }
    }return false
}

const array = [11,1212,341,12312, 22,141]
const search = 123
const found = isContains (array, search)
document.writeln(`<p>${found}</p>`)






// function sebagai value
function bilangHi(namaz){
    document.writeln(`<p>Hai ${namaz}</p>`)
}

let apa = bilangHi

say("Yogi")