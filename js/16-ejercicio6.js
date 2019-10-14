'use strict'
//nos dice si es par o impar
//1.ventana prompt
//2.si no es valido que nos pida de nuevo el numero

var number = parseInt(prompt("Introduzca numero: ", 0));

while (isNaN(number)) {
    number = parseInt(prompt("Introduce un número: ",0));

}

if (number%2 == 0) {
    alert("Es un número par");
}else{
    alert("El número es impar");
}