const futuro = Date.now() + 10000
var quantidade = 0 // declaração

while(Date.now() < futuro) { // expressão
    quantidade++ // incremento // NAO ENTENDI NO QUE ALTEROU COLOCAR ESSE "++"
}

console.log('Qtde: ' + quantidade)