loopi:
    for (let i = 0; i <= 100; i++){
        loopj:
            for (let j = 0; j < 100; j++){
                if (j <10){
                    continue loopi
                }
                console.log(`${i} - ${j}`)
            }
    }