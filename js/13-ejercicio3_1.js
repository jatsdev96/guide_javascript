'use strict'

/*
 Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario 
 */

 var numero1 = parseInt(prompt("Ingrese el primer numero",0));
 var numero2 = parseInt(prompt("Ingrese el segundo numero",0));

 document.write("<h1>De "+numero1+" a "+numero2+" están los numeros:</h1>");

 for (var index = numero1; index <= numero2; index++){
     document.write(index+"<br/>");
 }