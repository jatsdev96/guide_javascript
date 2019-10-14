'use strict'
//Tabla de multiplicar de un numero introducido por pantalla 

var number = parseInt(prompt("Introduce número: ", 0));
var multiplicacion = 0;
document.write("<h1> Tabla del "+ number + "</h1>");
for (var i = 0; i <= 10; i++) {
    multiplicacion = i*number;
    document.write(i+"X"+number+" = "+multiplicacion+"<br/>");
    
}