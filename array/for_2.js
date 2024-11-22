//const notas = [7, 8, 3, 5, 10, 9, 8, 8]

// let valores = ''
// // for each significa "percorra cada um dos elementos"
// for(let nota of notas){ //essa é a melhor forma de percorrer uma
//         console.log(nota) //array do 1º ao último elemento
// }


// outra forma de percorrer os elementos:
// const notas = [7, 8, 3, 5, 10, 9, 8, 8]
// 
// let valores = '' //por esta let ser string, ñ será somado, mas sim concatenado
// 
// for(let nota of notas){ //esse "of" mostra q acessará os valores
//     valores += nota + ' ' //esse espaço entre as aspas é p mostrar os valores na mesma linha
// }
// 
// console.log(valores)


// uma forma de percorrer cada um dos índices:
const notas = [7, 8, 3, 5, 10, 9, 8, 8]

let indices = ''

for(let indice in notas) { //esse "in" mostra q acessará os índices
    indices += indice + ' '
}

console.log(indices)