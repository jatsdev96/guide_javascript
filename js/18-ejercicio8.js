'use strict'

/*

Calculadora:
-Pida dos números por pantalla
-Si metemos uno mal que nos lo vuelva a pedir 
-En el cuerpo de la página, en una alerta y por la consola
el resultado de sumar, restar, multiplicar y dividir esas dos cifras


 */

 var numero1 = parseInt(prompt("Introduce el primer número: ",0));
 var numero2 = parseInt(prompt("Introduce el segundo número: ",0));

 while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt("Introduce el primer número: ",0));
    var numero2 = parseInt(prompt("Introduce el segundo número: ",0));
 }

 var resultado = "La suma es: "+(numero1+numero2)+"<br/>"+
                 "La resta es: "+(numero1-numero2)+"<br/>"+
                 "La multiplicación es: "+(numero1*numero2)+"<br/>"+
                 "La división es: "+(numero1/numero2)+"<br/>";
                
var resultadoCMD = "La suma es: "+(numero1+numero2)+" \n"+
                 "La resta es: "+(numero1-numero2)+" \n"+
                 "La multiplicación es: "+(numero1*numero2)+" \n"+
                 "La división es: "+(numero1/numero2)+" \n";
    
document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);                 