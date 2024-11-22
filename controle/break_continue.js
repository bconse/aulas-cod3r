// break
for(let i = 1; i <= 5; i++){
    if(i === 3){
        break //interrompe o for e vai pra próxima linha depois do for
    }
    console.log(i)
}

// continue
for(let i = 1; i <= 5; i++){
    if(i === 3) {
        continue //interrompe apenas aquela repetição e vai pra próxima repetição.
    }
    console.log(i)
}