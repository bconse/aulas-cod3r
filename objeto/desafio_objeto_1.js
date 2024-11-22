// Objeto: Data
// Atributo: (dia/mes/ano)
// Método: exibir -> "dia/mes/ano"

const hoje = {
    dia: 30,
    mes: 9,
    ano: 2024,
    dataCompleta: function(){
        return `${this.hoje}/${this.mes}/${this.ano}`
    }
}

//se precisar trocar o dia:
hoje.dia = 11

console.log(hoje.dataCompleta())
console.log(hoje.mes)
