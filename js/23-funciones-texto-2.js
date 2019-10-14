'use strict'

//Tranformación de números
var numero = 444;
var texto1 = "Bienvenidos al curso de japones curso avanzado perros";
var texto2 = "está bien chido";

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda2 = texto1.lastIndexOf("curso");
console.log(busqueda2);

var busqueda3 = texto1.search("curso");
console.log(busqueda3);

var busqueda4 = texto1.match("curso");
console.log(busqueda4);

var busqueda5 = texto1.match(/curso/g);// encontrar mas coincidencias, se convierte en expresion regular
//g para hacer una busqueda global
console.log(busqueda5);

var busqueda6 = texto1.substr(15,5);//ahora vamos a extraer un elemento
console.log(busqueda6);

var busqueda7 = texto1.charAt(30);//solo para sacar una letra
console.log(busqueda7);

var busqueda8 = texto1.startsWith("Bienvenidos al curso");//si asi inicia el texto true
console.log(busqueda8);

var busqueda9 = texto1.endsWith("avanzado perros");// ahora solo se toma el final en vez del principio
console.log(busqueda9);

var busqueda10 = texto1.includes("japones");//busca una palabra en el texto, si ésta está arrojará un true

console.log(busqueda10);