const numeros = [1, 2, 3, 4, 5]

numeros[0] = 100 //para alterar o elemento do índice 0
numeros.push(6) //para adicionar um array

console.log(numeros.indexOf(4)) //mostra qual o índice do elemento
console.log(numeros.includes(10))//diz se o elemento pertence ou nao ao array
console.log(numeros.join(' - '))// vai juntar todos os elemetos do array com o elemento que voce indicar
console.log(numeros) //assim que executar vai adicionar o 6 aos elementos acima

//numeros.concat(7, 8, 9) //o método concat nao mexe no array existe, mas cria um novo.
const numeros2 = numeros.concat(7, 8, 9) //p/ que mexa na existente tem que fazer assim

console.log(numeros2)