// JavaScript source code
'use strict'
//pruebas con let y var
alert("hola");

//prueba con var 
var numero = 40;
console.log(numero);//40
if (true) {
    var numero = 50;
    console.log(numero);//50
}
console.log(numero);//40

//prueba con let 

var texto = "Curso de JV jats.com"
console.log(texto); //jv
if (true) {
    let texto = "xd te la creiste weixxx";
    console.log(texto);//weixx
}
console.log(texto);//jv
