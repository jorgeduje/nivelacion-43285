//ANCHOR --> COPIA POR VALOR O POR REFERENCIA

let a = 1;
let b = a;

console.log(b);

// a = a + 1
a += 1;
a += 200;

console.log(a);
console.log(b);

// obj o array

let auto = {
  modelo: 2011,
  color: "rojo",
};

let copiaAuto = auto;

console.log(copiaAuto);

auto.modelo = 2022;
auto.marca = "VW";

console.log(auto);
console.log(copiaAuto);

copiaAuto.marca = "audi";

console.log(auto);

let numeros = [12, 54, 11];

console.log("--------------");
console.log("--------------");
let copiaNumeros = numeros;

console.log(numeros);
console.log(copiaNumeros);

numeros.push(100);
console.log(numeros);
console.log(copiaNumeros);

copiaNumeros.push("hola");
console.log(numeros);
console.log(copiaNumeros);

// operador spread

let mascota = {
  nombre: "Jack",

  edad: 3,
  color: "blanco",
};

let copiaMascota = { ...mascota };

mascota.color = "negro";

console.log(copiaMascota);

let numerosDeLaSuerte = [29, 32, 54];

let copia = [...numerosDeLaSuerte];

console.log(copia);

numerosDeLaSuerte.push(300);
console.log(copia);
