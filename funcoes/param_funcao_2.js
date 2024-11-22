function somar(a = 0, b = 0, c = 0, d = 0) {
    //function somar(a = 0, b = 0, c = 0, d = 0)
    return a + b + c + d
}
console.log(somar(1, 2, 3, 4)) // obrigatoriamente precismo colocar 4 valores, senao dará "NaN" no output

//posso setar valores padrão p/ preencher valores:
//function somar(a = 0, b = 0, c = 0, d = 0)

console.log(somar(1, 2, 3))
console.log(somar(1, 2))
console.log(somar(1))
console.log(somar())

//e se eu passasse mais do que 4 parâmetros não faria diferença alguma
//console.log(somar(1, 2, 3, 4, 5, 6))