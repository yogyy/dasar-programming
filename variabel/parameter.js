// default parameter

function register(name = "anda belum memasukan nama", gender = "Unknown"){
    console.log(name)
    console.log(gender)
}

register()
register("John")
register("Constantine","Man")
register("John", undefined) // tidak ada value
register("John", null) // karna null sudah ada value, tapi kosong


// rest parameter
document.writeln("<p>Rest Parameter</p>")

function sum(nama, ...data){
    let total = 0
    for (const item of data){
        total += item
    }
    document.writeln(`<p>Total ${nama} is ${total}</p>`)
}

sum("Leo", 77,33)
sum("Rodd", 77,33,240)

const values = [20,210,14,16,40]
sum ("Test", ...values)


