const nota = 9.99


if(nota <= 10 && nota >= 9) {
    console.log('A')
}

if(nota < 9 && nota >= 7) { //coloquei numero redondo "9" ao invés do "8.9" para caso a nota seja "8.99" poder entrar
    console.log('B')
}

if(nota < 7 && nota >= 5) {
    console.log('C')
}

if(nota < 5 && nota >= 4.5) {
    console.log('D')
}

if(nota >= 0 && nota < 4.5) {
    console.log("F")
}
