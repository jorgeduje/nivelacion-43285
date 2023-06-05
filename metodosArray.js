// TODO ---> MAP

// devuelve un nuevo array y siempre de la misma longitud

// CREAR UN NUEVO ARRAY CON TODOS LOS ELEMENTOS DEL ARRAY NUMEROS PERO MULTIPLICADO
// POR 2
let numeros = [12, 15, 2]; // [24, 30, 4]

let algo = numeros.map((elemento) => elemento * 2);
console.log(algo);

// let nuevoArray = []
// for(let i = 0; i < numeros.length ; i++){
//     nuevoArray.push( numeros[i] * 2)
// }
// console.log(nuevoArray)

// TODO ---> FILTER

// RETORNA UN NUEVO ARREGLO PERO NO NECESARIAMENTE DE LA MISMA LONGITUD

let productos = [
  {
    title: "celular",
    price: 220,
  },
  {
    title: "tablet",
    price: 500,
  },
  {
    title: "tablet",
    price: 300,
  },
];

let productosFiltrado = productos.filter((elemento) => elemento.price < 400);
console.log(productosFiltrado);

// TODO ---> FIND

let productoEncontrado = productos.find((elemento) => {
  return elemento.title === "zapatilla";
});

console.log(productoEncontrado);

// TODO ---> SOME

let existe = productos.some((elemento) => {
  return elemento.price > 400;
});
console.log(existe);

// TODO ---> REDUCE

let numeritos = [12, 54, 1, 3];

let total = numeritos.reduce((acc, elemento) => {
  return acc + elemento;
}, 0);
console.log(total);

let productos2 = [
  {
    title: "celular",
    price: 220,
    quantity: 1,
  },
  {
    title: "tablet",
    price: 500,
    quantity: 5,
  },
  {
    title: "tablet",
    price: 300,
    quantity: 3,
  },
];

let cantidadTotal = productos2.reduce((acc, elemento) => {
  return acc + elemento.quantity;
}, 0);
console.log(cantidadTotal);
