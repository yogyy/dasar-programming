{

    const names = ["John", "Constantine", "Lucifer", "Morningstar"]
    let [firstName, lastName, ...other] = names

    console.log(firstName)
    console.log(lastName)
    console.log(other)
}


    // mengambil data di object
{
    const person = {
        firstName: "John",
        lastName: "Constantine",
        address: {
            street: "Taman Walet Raya",
            city: "Gotham",
            country: "Wakanda"
        },
        hobby: "Looking for hobby",
        channel: "Cons ch"
    }
    
    let {firstName, lastName, address:{city,street,country}, ...other} = person
    console.log(firstName)
    console.log(lastName)
    console.log(street)
    console.log(city)
    console.log(country)
    console.log(other)
}


{
    function displayPerson({firstName, middleName, lastName}){
        console.log(firstName)
        console.log(middleName)
        console.log(lastName)
    }

    const person = {
        firstName : "Lex",
        middleName : "-0",
        lastName : "Luthor"
    }
    displayPerson(person)
}

{
    function sum([first, second]){
        return first + second
    }
    console.log(sum([20,10]))
}

{
    const names = ["Yogi", "F-S"]
    const [firstName, middleName, lastName = "Constantine"] = names
    

    console.log(firstName)
    console.log(middleName)
    console.log(lastName)

    console.log(firstName, middleName, lastName)
}

