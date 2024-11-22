const numeros = [1, 2, 3, 4, 5, 8]

numeros.splice(1, 1) //para excluir elementos, 1o indico a partir de qual índice
//quero começar a excluir e depois quantos elementos eu quero excluir
console.log(numeros)


numeros.pop()//exclui elementos de trás pra frente
numeros.pop()
console.log(numeros.pop()) //continua excluindo, mas mostra quais foram
console.log(numeros)
