const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function(){
        return this.preco * (1 - this.desconto) //o "this" é necessário somente dentro do objeto, p/ dizer sobre qual valor estamos falando
    }
}

console.log(produto.nome)
console.log(produto.precoComDesconto())