// DUAS expressões resultar em TRUE (Aritméticos/Relacionais/Lógicos)

var verdadeira1 = 8 / 4 > 1 && 3 != 1
var verdadeira2 = 6 + 1 >= 2 || 4 <= 0

console.log('É '+ verdadeira1 +' a expressão.')
console.log('Também é ' + verdadeira2 + ' a expressão.')

 
// DUAS expressões resultar em FALSE (Aritméticos/Relacionais/Lógicos)

var falso1 = !(2 * 0 < 1)
var falso2 = 8 - 4 > 12 || 15 === '15'

console.log('\nJá esta expressão é ' + falso1)
console.log('\nEsta expressão também é ' +falso2)