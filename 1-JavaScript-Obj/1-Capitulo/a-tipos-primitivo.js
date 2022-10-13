// TIPOS PRIMITIVOS
// STRING NUMBER BOOLEN NULL UNDEFINED
// TIPOS PRIMITIVOS ARMAZENA UM ESPAÇO NA MEMÓRIA PARA CADA VARIAVEL NÃO PEGA A REFERÊNCIA

let cor1 = 'blue'
let cor2 = cor1
cor1 = null

console.log(cor1, cor2)
console.log(typeof cor1, typeof cor2)
console.log(cor1 === null)