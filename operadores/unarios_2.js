//primeiro exemplo usando operadores de igualdade
var a = 1
var b = 2

a++
b++
console.log(a === b)

//agora exemplo de CÓDIGO CONFUSO unindo operadores unários e de igualdade
var a = 1
var b = 2

console.log(++a === b++) 

//essa é uma operação complexa e pouco sugerida, pois:
//aqui há uma regra de prioridade, ex.: em 1+2*3
//operadores unários prefixados ++a tem prioridade sobre os posfixados a++
//mas operadores de comparação "===" tem prioridade sobre o unário
//então primeiro será 1+a "é estritamente igual a" b? TRUE

//ao inves disso console.log(++a === b++)

//prefira fazer isto:

a++
console.log(a === b)
b++