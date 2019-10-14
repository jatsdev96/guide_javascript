'use strict'

/*
 Mostrar todos los números impares que hay entre dos números introducidos por el usuario 
  */

  var numero1 = parseInt(prompt("Ingrese primer número: ",0));
  var numero2 = parseInt(prompt("Ingrese segundo número",0));

 document.write("<h1> De "+numero1+" a "+numero2+" los impares son: </h1>");   
 
 for (let i = numero1; i <= numero2; i++) {
     if (i%2 != 0) {
         document.write(i+" <br/>");
     }
     debugger;
 }