const a = 8
const b = 4
const operacao = '+' // + - * /

///const resultado = operacao === '+' ? a + b : a - b //forma ternária básica
//console.log(resultado)

const resultado = 
    operacao === '+' ? a + b :
        operacao === '-' ? a - b :
            operacao === '*' ? a * b : a / b
//forma ternária complexa
console.log(resultado)
