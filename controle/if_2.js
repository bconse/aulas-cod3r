const nota = 6
const bomComportamento = false

if(nota >= 7 && bomComportamento)
    console.log('Parabéns! ')

if(nota < 7 || !bomComportamento) //aqui está negando o "true" significa que o aluno teve mau comportamento
    console.log('Uma pena! ')

console.log('Fim! ')