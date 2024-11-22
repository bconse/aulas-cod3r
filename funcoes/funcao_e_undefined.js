function semRetorno() {
    console.log('Função foi chamada!')
}

let a = 3
let b = a * 3 + 10
let c = semRetorno()

console.log(a, b, c)

//aqui resultou em undefined pois não foi atribuído nenhum
//valor para a função