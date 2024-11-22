//muito parecido com o if/else que temos multiplas seleções,
//mas diferente do if/else, o valor não será verdadeiro ou falso

 let nota = 12

 switch(Math.ceil(nota)) { //Math.ceil serve para arredondar 
    case 10: //aqui estou dizendo que caso seja "10, 9, 8 ou 7" é pra mostrar "Parabéns"
    case 9:
    case 8:
    case 7:
        console.log('Parabéns!')
        break //isso é para "parar" a execução do código caso seja uma das notas acima, senao vai imprimir todos os cases abaixo
    case 6:
    case 5:
        console.log('Reprovação!')
    case 4:
    case 3:
    case 2:
        console.log('Reprovado!')
        break
    case 1:
    case 0:
        console.log('Muito Reprovado!')
        break
    default://isso é p/ caso nao obedeça a nenhum dos cases acima. Aqui n precisa do "break" porque abaixo nao tem mais nenhum "case"
        console.log('Nota Inválida!')
 }
console.log('Fim!')