// apenas uma forma diferente de estruturar, com bloco dentro do outro

const hora = 23
var saudacao

if(hora < 12) {
    saudacao = 'Bom dia!'
} else {
    if(hora < 18) {
        saudacao = 'Boa tarde!'
    } else {
        if(hora < 22) {
            saudacao = 'Boa noite!'
        } else {
            saudacao = 'Muito tarde!'
        }
    }
    
}

console.log(saudacao)