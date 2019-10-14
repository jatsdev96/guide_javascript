'use stric'
//parametros REST Y SPREAD
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}
listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco");
//cuando se agregan los ... se esta indicando que los elementos del array frutas se toman como 
//si fueran los parametros para la función