const object = ['ford', 'toyota', 'honda', 'chevrolet']


function test() {
    console.log(...object);
}

test()


let id = Math.random()// genera numero random
const persona = {
    name: 'jhon',
    ['baz' + id]: 40,// id pasa como una variable

};

function pers() {
    console.log(persona);
}
pers()

let { a: val } = { a: 2 };
console.log(val);

//asignar variables a un array
let [a, b, c, d] = [1, 2, 3, 4]

console.log(a);


//si la variable no tiene valor asignado le asigna el primer valor dado
let [z = 1, x = 3, v = 4] = [1, 2]

console.log(v);

