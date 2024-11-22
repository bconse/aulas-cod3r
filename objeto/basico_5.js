const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            {nome: 'Hospital X', muitoProximo: true},
            {nome: 'Shopping Y', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
}

//formas de acessar os dados:
//1ª:
console.log(cliente['endereco'], ['logradouro'])
//2ª:
console.log(cliente.endereco.logradouro)
//3ª:
console.log(cliente.endereco.pontosRef[1].muitoProximo)