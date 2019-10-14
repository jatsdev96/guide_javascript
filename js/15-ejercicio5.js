'use strict'
 //muestre todos los números divisores de un número introducido en prompt
  var numero = parseInt(prompt("Introduzca su número: ",0));
  var i = 0;
  while (i<numero) {
      i++
      if (numero%i == 0) {
          console.log("El número "+numero+" es divisible entre "+i)
      }
  }