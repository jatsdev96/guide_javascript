'use strict'
//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

//Defino la función 
function calculadora(numero1, numero2) {
    //conjunto de instrucciones a ejecutar 
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicación: "+(numero1*numero2));
    console.log("División: "+(numero1/numero2));
    console.log("***************************************");

    //return "Hola soy la calculadora ;D";
}

//invocar o llamar a la función 
//calculadora();

for (var i = 0; i <= 10; i++) {
    console.log(i);
    calculadora(i,8);
}