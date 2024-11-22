var t1 = false
var t2 = true

var comprarTV50 = t1 && t2 // AND
console.log('Vamos comprar a TV 50"? ' +  comprarTV50)

var comprarTV32 = t1 !== t2 // XOR ("ou exclusivo")
console.log('Vamos comprar a TV 32"? ' + comprarTV32)

var tomarSorvete = t1 || t2 // OR
console.log('Vamos comprar sorvete? ' + tomarSorvete)

var ficarEmCasa = !tomarSorvete // NOT
console.log('Vamos comprar a TV 50"? ' + ficarEmCasa)

