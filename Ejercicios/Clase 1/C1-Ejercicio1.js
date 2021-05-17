//Krapp Ejercicio 1 "Las galletitas de Ema"
console.clear();
var huevos = 5;
var chocolate = 1;
var harina = 4;
var azucar = 3;

var minimoHuevos = 3;
var minimoChocolate = 1;
var minimoHarina = 0.5;
var minimoAzucar = 5;

if (
  huevos >= minimoHuevos &&
  chocolate >= minimoChocolate &&
  harina >= minimoHarina &&
  azucar >= minimoAzucar
) {
  console.log("Tienes los ingredientes necesarios");
} else {
  console.log("Te faltan los siguientes ingredientes: ");
  if (huevos < minimoHuevos) {
    console.log("Te faltan " + (minimoHuevos - huevos) + " huevos");
  }
  if (chocolate < minimoChocolate) {
    console.log(
      "Te faltan " + (minimoChocolate - chocolate) + " barras de chocolate"
    );
  }
  if (harina < minimoHarina) {
    console.log("Te faltan " + (minimoHarina - harina) + " Kg de harina");
  }
  if (azucar < minimoAzucar) {
    console.log(
      "Te faltan " + (minimoAzucar - azucar) + " cucharadas de azucar"
    );
  }
}