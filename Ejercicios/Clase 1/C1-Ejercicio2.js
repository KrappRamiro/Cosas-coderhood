//Krapp Ejercicio 2 "La tienda de ropa"
console.clear();
var precioPrendaMinimo = 1500;
var precioPrendaMaximo = 3000;
var porcentajeAumentoMinimo = 25;
var porcentajeAumentoMaximo = 100;

var precioPrenda = 1600;
var porcentajeAumento = 30;
var precioFinal;

function checkPrecioPrenda()
{
    if (precioPrenda < precioPrendaMinimo) {
        console.log("El precio inicial de la prenda es menor al permitido");
    }
    else if (precioPrenda > precioPrendaMaximo) {
        console.log("El precio inicial de la prenda es mayor al permitido");
    }
    else {
        console.log("El precio inicial de la prenda esta dentro de los valores permitidos");
    }
}

function checkPorcentajeAumento()
{
    if (porcentajeAumento < porcentajeAumentoMinimo) {
        console.log("El porcentaje de aumento es menor al permitido");
    }
    else if (porcentajeAumento > porcentajeAumentoMaximo) {
        console.log("El porcentaje de aumento es mayor al permitido");
    }
    else {
        console.log("El porcentaje de aumento esta dentro de los valores permitidos");
    }
}

checkPrecioPrenda()
checkPorcentajeAumento()
console.log("--------------------")

console.log("El precio inicial es " + precioPrenda);
console.log("El porcentaje de aumento es del " + porcentajeAumento + "%");
precioFinal = precioPrenda + precioPrenda * (porcentajeAumento / 100);

console.log("El precio final es " + precioFinal);
if (precioFinal > 4000) {
    console.log("Precio excedido");
}