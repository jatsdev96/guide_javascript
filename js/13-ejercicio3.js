// JavaScript source code
'use strict'
/*
 Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario 
 */
var primer_numero = 0;
var segundo_numero = 0;

do {

    primer_numero = parseInt(prompt("Ingresa tu primer número: ", 0));
    segundo_numero = parseInt(prompt("Ingresa tu segundo número: ", 0));

    if(segundo_numero < primer_numero) {
        alert("El primer número debe ser menor al segundo");
    }else if (segundo_numero==primer_numero) {
        alert("El primer numero es igual al segundo")
    }

} while (segundo_numero<primer_numero);

for (let index = primer_numero+1; index < segundo_numero; index++) {
    console.log("{"+index+"}");
    
}

//console.log(":D "+ primer_numero + segundo_numero);