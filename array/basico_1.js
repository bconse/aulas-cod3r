// para acessar os dados da array usamos o índice, por isso arrays são chamadas de indexadas
//              0    1    2   3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8]

console.log(notas)
console.log(notas [3])
console.log(notas [5])
console.log(notas [0])

// apesar de ser uma const, os ELEMENTOS (7.8, 6.7...) podem ser alterados
// a ARRAY notas nao pode (notas = [1, 2 , 3]), para isso:
notas[4] = 8.7
console.log(notas)
