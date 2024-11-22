function retornaUmaFuncao() {

    function bomDia() {
        return "Bom dia!!!"
    }

    return bomDia
}

console.log(retornaUmaFuncao) //no output mostrará: [Function: retornar]
console.log(retornaUmaFuncao()) //no output mostrará: [Function: bomDia]
console.log(retornaUmaFuncao()) //se o último "return" for a chamada da função bomDia()
                          //no output mostrará: Bom dia!!!
console.log(retornaUmaFuncao()()) //no output mostrará: Bom dia!!!

const umaFuncao = retornaUmaFuncao()
console.log(umaFuncao())