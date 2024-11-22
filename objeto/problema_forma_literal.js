//problema: muitas datas, muita repetição de código

const d1 = {
    dia: 30,
    mes: 9,
    ano: 2024,
    dataCompleta: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d2 = {
    dia: 22,
    mes: 11,
    ano: 2023,
    dataCompleta: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d3 = {
    dia: 3,
    mes: 4,
    ano: 2022,
    dataCompleta: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(d1.dataCompleta())
console.log(d2.dataCompleta())
console.log(d3.dataCompleta())