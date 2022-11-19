let counter =1 
while(true){
    document.writeln(`<p>Perulangan ke ${counter}</p>`)
    counter ++

    if (counter > 5) {
        break
    }
}

document.writeln('<br>')

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0){
        continue
    }
    document.writeln(`<p>Perulangan ke ${i}</p>`)
    
}
document.writeln('<br>')

const user = 'Constantine'
for ( let nama = 0; nama <= 8; nama++){
    
   document.writeln( user + ` ${nama}`+`,`) 
}
