//if....else if...else
const a = 10
const b = 28
const operacao = '0' // + - / * %

var resultado

if(operacao === '+') {
    resultado = a + b
} else if(operacao === '-') {
    resultado = a - b
} else if(operacao === '/') {
    resultado = a / b
} else if(operacao === '*'){
    resultado = a * b
} else resultado = a % b


console.log(resultado)