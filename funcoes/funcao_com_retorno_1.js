function sempreRetornaUm() {
    return 1 //nada que for colocado abaixo do return será executado, entao ñ adianta fazer um "console.log('Fim!'), por ex."
}

function textoOuNumero(retornaTexto) {
    //if(retornaTexto) {                    
    //    return "Sou um texto!"
    //} else {
    //    return 123                    posso transformar isso tudo em uma só linha
    //}
    return retornaTexto ? "Sou um texto!" : 123 //usando isso que é chamado de operador ternário
}

let valor = sempreRetornaUm() + 999
console.log(valor)

let texto = textoOuNumero(true)
console.log(texto)

console.log(textoOuNumero(false)) //nao necessariamente preciso armazenar numa variável como feito acima.
                                  //posso simplificar escrevendo dentro de console.log