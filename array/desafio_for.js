// percorrer todos os elementos ímpares, começando do 9
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 
// for(let i = 9; i >= 1; i -= 2){
//     console.log(i)
// }

// outra forma de fazer:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = numeros.length - 2; i >= 0; i -= 2) {
    console.log(numeros[i])
}
