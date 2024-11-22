var a = 1
var b = "1"

// apesar de "a" ser um núm. e "b" ser uma string, seus conteúdos são iguais
// o comando == compara apenas conteúdos, portanto o resultado será "true".
console.log(a == b)

// aqui já estamos fazendo uma comparação estrita, diferente da comparação normal,
// compara-se conteúdo e tipo, portanto será "false".
console.log(a === b)

// também existe essa opção quando estamos comparando as "!="

console.log(a != b)
console.log(a !== b)

