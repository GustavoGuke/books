// Hoisting
// funções são elevadas para cima do projeto
let result = add(5, 6)
function add(n1, n2) {
    return n1 + n2
}
console.log(result)

let add2 = add
console.log(add2(1, 1))

// função para ordenar ------------------------------------------------------------------------------------------
let nums = [2, 1, 4, 10, 8, 0]
let ordenados = nums.sort((a, b) => a - b)
console.log(ordenados)

// Parametro arguments -----------------------------------------------------------------------------------------
function arg(teste) {
    console.log(arguments)
}
arg('teste', 2, true)

function soma() {
    let result = 0
    let i = 0
    let nums = arguments.length

    while (i < nums) {
        result += arguments[i]
        i++
    }
    return result
}
console.log(soma())

// this em objetos -------------------------------------------------------------------------------------------------
function myNameAll() {
    console.log(this.name)
}
let person1 = {
    name: 'kessilin llima',
    // myName: function(){
    //     console.log(this.name)
    // }
    myNameAll: myNameAll
}

let person2 = {
    name: 'Kerolin',
    myNameAll: myNameAll
}
person1.myNameAll()
person2.myNameAll()

// Mudando/manipulando valor de this --------------------------------------------------------------------------------------------
let label =''
function sayNameAll(){
    console.log(`${label} ${this.name}`)
}

let person3 = {
    name: 'Kessilin Lima'
}

let person4 = {
    name: 'Kerolin Lima'
}
var name = 'Gustavo Lima'
//referencia por array
sayNameAll.apply(this,['global'])
//referencia por variavel individual
sayNameAll.call(person3,'person3')
sayNameAll.call(person4, 'person4')
// referencia bind
let myNamebind = sayNameAll.bind(person1)
myNamebind()