const numeros = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < numeros.length; i++) { //para percorrer os n do array
//     console.log(numeros[i])
// }

//outras formas de percorrer nos. do array:

// 1ª forma:
//for(let n of numeros) {
//console.log(n)
//}

// 2ª forma:
//function praCadaElemento {
//    console.log('Dentro do ForEach!') //vai escrever isso p/ cada elemento do array
//}
//
//numeros.forEach(praCadaElemento)

// 3ª forma:
//function praCadaElemento(elemento, indice, array) { //essa é a ordem em que serão exibidos:elemento, índice e array completo
//    console.log(elemento, indice, array)
//}
//numeros.forEach(praCadaElemento)

// 4ª forma:
//numeros.forEach(function (){
//    console.log('ForEach!')
//})


// 5ª forma:
//numeros.forEach(function (el, _, array){
//    console.log(el, array)
//})