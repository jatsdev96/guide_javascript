'use strict'

//Tranformación de números
var numero = 444;
var texto1 = "   Bienvenidos al curso de japones curso avanzado perros"   ;
var texto2 = "está bien chido";

var busqueda = texto1.replace("japones","cocinar");
console.log(busqueda);

var busqueda2 = texto1.slice(15,30);//va a mostrar desde la posición que se indica
console.log(busqueda2);

var busqueda3 = texto1.split(" ");//va a separar el texto por lo que se indique, en éste caso es el espacio, si se escribe solo split() mete todo el texto en un array
console.log(busqueda3);

var busqueda4 = texto1.trim();//borra los espaciones que tenga el texto al inicio y final
console.log(busqueda4);