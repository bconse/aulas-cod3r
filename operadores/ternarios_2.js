//aqui adiciona mais uma possibilidade, mas sem tirar o conceito de ternário

const hora = 23
const saudacao = hora <= 11 ? 'Bom dia' : hora <= 17 ? 'Boa tarde' : 'Boa noite'
console.log(saudacao)