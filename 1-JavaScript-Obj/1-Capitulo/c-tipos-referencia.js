//TIPO DE REFERÊNCIA
// PEGA A REFERENCIA DA VARIAVEL NA MEMORIA

class Obj{

}

let obj1 = new Obj()
let obj2 = obj1

obj1.metodoUm = 'teste'
delete obj2.metodoUm

console.log(obj1)