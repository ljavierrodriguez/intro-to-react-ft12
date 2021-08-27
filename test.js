let nombres = ['Diego', 'Priscila', 'Lewis', 'Edwards'];

let nombres2 = nombres.map((nombre, i, arreglo) => { // item, index, arr
    console.log(nombre, i, arreglo)
    return nombre.toUpperCase();
})

console.log(nombres2);