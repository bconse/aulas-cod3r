function executar(param) {
    if(typeof param === "function") {
        console.log(param()) // --> Parte central da aula
    }
}

function bomDia() { 
    return "Bom dia"
}

executar(3) //nao executa nada
executar(bomDia()) //apenas chama a funcao, mas apenas o resultado dela"Bom dia"
executar(bomDia) // --> Parte central da aula //aqui a eu passo a própria função para o parâmetro e executa, subindo para linha 7, depois 1, 2 e 3.

const x = bomDia // aqui atribuo a "x" a função
console.log(x) // aqui eu peço pra mostrar x, que será uma função e exibirá "Bom dia"
console.log(x()) // aqui ele está chamando x e x é a função bomDia

const y = bomDia() // aqui atribuo a "y" o texto "Bom dia"
console.log(y) // aqui retornará apenas a string "Bom dia"
