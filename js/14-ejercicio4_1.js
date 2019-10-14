'use strict'

//se muestran los numeros impares entre dos numeros dados 

var numero1 = parseInt(prompt("Geben sie die erste Nummer: ",0));
var numero2 = parseInt(prompt("Geben sie die zweite Nummer: ",0));

while (numero1 < numero2) {
    numero1++;
    if (numero1%2 != 0) {
        console.log("El "+numero1+" es impar");
    }
}