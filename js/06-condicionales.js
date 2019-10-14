// JavaScript source code
'use strict'
// IF CONDICIONAL
//Si A es igual a B entonces haz algo

var edad = 12;
var nombre = 'Jats Nergal';

/*
 *Operadores relacionales 
 * Mayor: >
 * Menor: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto!=
 */

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " a�os, es mayor de edad");
    if (edad <= 33) {
        console.log('Todavia eres Millenial');
    } else if(edad >= 70){
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres millenial');
    }
} else {
    //es menor de edad
    console.log(nombre+" tiene "+edad+" a�os, es menor de edad");
}

var year = 2028;

//Negacion
if (year != 2016) {
    console.log("El a�o no es 2016 realmente es:"+ year);
}

//AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 ||(year >= 2018 && year == 2028)) {
    console.log("El a�o acaba en 8");
} else {
    console.log("A�o no registrado");
}