// Parâmetro (Nota) --> Retorno (Conceito)

const conceito = "D"
var nota

if(conceito === "A") {
    nota = "10"
} else if (conceito === "B") {
    nota = "7"
} else if (conceito === "C") {
    nota = "5"
} else {
    nota = "null"
}

console.log(nota)

//solução do professor, usando switch:
function notaParaConceito(nota){
    switch(nota){ //ou switch(Math.ceil(nota)) p/ arredondar notas decimais
        case 10: return 'A+' 
        case 9: return 'A' 
        case 8: return 'B+' 
        case 7: return 'B' 
        case 6: return 'C+' 
        case 5: return 'C' 
        case 4: return 'D+' 
        case 3: return 'D'
        case 2: return 'E+' 
        case 1: return 'E'
        case 0: return 'F' 
        default: return null
    }    
}    
console.log(`O conceito do aluno é ${notaParaConceito(9)}`)