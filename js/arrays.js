// Sintaxis del array

let marcasAuto = []; //Estaria declarando un Array Vacío

const marcasAuto2 = [
    'Renault',
    'Mazda',
    'Toyota',
    'Ferrari',
    'Mercedes',
    'Volkswagen',
    'Audi',
    'BMW',
    'Porsche',
];

//Mostrar todas las marcas de los Autos
console.log(marcasAuto2);

//Mostrar la primera marca de Autos
console.log('La primera marca de Autos: ' , marcasAuto2[0]);

//Contar los elementos del Array
console.log('Cuántos son los elementos dentro del Array: ' , marcasAuto2.length);

//Mostrar el último elemento del Array
let ultimaMarca = marcasAuto2[marcasAuto2.length - 1];
console.log('La última marca ingresada es: ', ultimaMarca);

// Usar el metodo PUSH para agregar un elemento al Array
let nuevaMarca = marcasAuto2.push('Ford');
console.log('La nueva marca es: ' , nuevaMarca);

//Implementar al principio del Array la BMW
let = marcaPrincipio = marcasAuto2.unshift('BMW');
console.log(marcaPrincipio, marcasAuto2);
