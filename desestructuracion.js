
// array u objetos

let persona = {
    nombre: "pepito",
    edad: 22, 
    dni: 213453142
}

// persona.nombre
// persona.edad
// persona.dni

// no importa el orden, pero si el nombre
let { edad, dni, nombre } = persona

console.log( dni )
// array

let usuarios = ["juan", "marta", "gonzalo", "maria"]

// si importa el orden, y no importa el nombre
let [ u3, u2, u1, u4 ] = usuarios

console.log(u3)

// let personas = [ 
//     {
//         nombre: "juan",
//         edad: 22
//     },
//     {
//         nombre: "juan",
//         edad: 22
//     }
// ]

// let [ x1, x2 ] = personas

// let {nombre, edad} = x1