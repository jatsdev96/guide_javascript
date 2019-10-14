'use strict'

//funciones anonimas
//Es una función que no tiene nombre, ese conjunto de instrucciones no tienen nombre y se pueden
//guardar en una variable
//se usa para hacer callbacks : una función que se ejecuta dentro de otra

/*var pelicula = function (nombre) {
    return "La pelicula es: "+ nombre; 
}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {

    var sumar = numero1 + numero2;
    
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    
    return sumar;
}

sumame(5, 7, function(dato) {
    console.log("La suma es: ", dato);
}, 
function(dato) {
    console.log("La suma por dos es: ", (dato*2));
});

//función flecha, sp i son mas de dos parametros se dejan los parentesis, sino solo se omiten
/*
sumame(5, 7, (dato) => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});
*/