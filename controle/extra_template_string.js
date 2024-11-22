//como mostrar no console.log duas variáveis sem precisar de muitas strings:


//ao invés disso: console.log("i = " + i + "j = " + j)
//será: console.log(`i= ${i}, j = ${j}`)

const i = 2
const j = 4
console.log(`i= ${i}, j = ${j}`)

// também podemos fazer isso:

console.log(`1 + 2 = ${1+2}`)
console.log(`Valor gerado foi: ${Math.random()}`)

//a idea do template string é simplificar a linha de código, sem precisar ficar concatenando.