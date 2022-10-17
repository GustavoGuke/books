// Hoisting
// funções são elevadas para cima do projeto
let result = add(5,6)
function add(n1, n2){
    return n1+n2
}
console.log(result)

let add2 = add
console.log(add2(1,1))

let nums = [2,1,4,10,8,0]
let ordenados = nums.sort((a,b) => a-b)
console.log(ordenados)