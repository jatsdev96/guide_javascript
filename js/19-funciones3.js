'use strict'
//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

//Defino la función 
function calculadora(numero1, numero2, mostrar = false) {
    //conjunto de instrucciones a ejecutar 
    if (mostrar == false) {
        console.log("Suma: "+(numero1+numero2));
        console.log("Resta: "+(numero1-numero2));
        console.log("Multiplicación: "+(numero1*numero2));
        console.log("División: "+(numero1/numero2));
        console.log("***************************************"); 
    }else{
        document.write("Suma: "+(numero1+numero2));
        document.write("Resta: "+(numero1-numero2));
        console.log("Multiplicación: "+(numero1*numero2));
        console.log("División: "+(numero1/numero2));
        console.log("***************************************");
    }
    

    //return "Hola soy la calculadora ;D";
}

//invocar o llamar a la función 
//calculadora();

for (var i = 0; i <= 10; i++) {
    console.log(i);
    calculadora(i,8);
}