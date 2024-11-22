var temDinheiro = false
var estaEnsolarado = false
var carroEstaNaGaragem = true

var resultadoE = '#1 (AND) - Vai pro shopping? '
resultadoE += temDinheiro && estaEnsolarado
console.log(resultadoE)

var resultadoOU = '#2 (OR) - Vai pro shopping? '
resultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resultadoOU)

