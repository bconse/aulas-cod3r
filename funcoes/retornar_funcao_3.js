//passando todos os parâmetros de uma vez
function somar1(a, b) {
    return a + b
}

console.log(somar1(5, 4))

//passando os parâmetros de forma "parcelada "
function somar2(a) {
    return function (b) {
        return a + b
    }
}

console.log(somar2(5)(4))

// essa forma mais complexa serve para casos de ter que
// repetidas vezes aplicar o mesmo imposto sobre um produto
// assim, basta salvarmos o valor do imposto numa constante

const somarMais10 = somar2(10)

console.log(somarMais10(5))

