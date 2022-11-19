// // function sebagai value
// function bilangHi(namaz){
//     document.writeln(`<p>Hai ${namaz}</p>`)
// }

// let hai = bilangHi

// hai("Yogi")


// function giveMeName(callback){
//     callback("Yogy")
// }

// giveMeName(bilangHi)
// giveMeName(hai)


// anonymous function

// 1. anonymouse function di variable
const say = function(name){ 
    document.writeln(`<p>Hello ${name}</p>`)
}

say("Constantine")

// 2. anonymouse function di parameter








// 3. anonymouse function di function
function outer(){
    function inner(){
        console.log("Inner")
    }
    inner()
    inner()
}

outer()

