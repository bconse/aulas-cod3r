function executar(fn) {
    if(typeof fn === "function") {
        console.log(fn(90, 50))
    }
}

function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

executar(somar)
executar(subtrair)
executar(multiplicar)

//no caso acima foram passados parâmetros (90 e 50) fixos
// se quisesse parâmetros flexíveis seria assim:

// function executar(fn, n1, n2) {
//     if(typeof fn === "function") {
//         console.log(fn(n1, n2))
//     }
// }
// 
// function somar(a, b){
//     return a + b
// }
// 
// function subtrair(a, b){
//     return a - b
// }
// 
// function multiplicar(a, b){
//     return a * b
// }
// 
// executar(somar, 90, 50)
// executar(subtrair, 90, 50)
// executar(multiplicar, 900, 500)


// uma outra opção seria colocar um valor padrão:

// function executar(fn, n1 = 10, n2 = 10) {
//     if(typeof fn === "function") {
//         console.log(fn(n1, n2))
//     }
// }
// 
// function somar(a, b){
//     return a + b
// }
// 
// function subtrair(a, b){
//     return a - b
// }
// 
// function multiplicar(a, b){
//     return a * b
// }
// 
// executar(somar, 90, 50)
// executar(subtrair, 90, 50)
// executar(multiplicar, 900, 500)

// executar(somar)