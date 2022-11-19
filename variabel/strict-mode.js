function useStrictMode(){
    // 'use strict'
    const  person ={
        firstName : "yogi"
    }

    // error
    with(person){
        console.log(firstName)
    }
}

useStrictMode()