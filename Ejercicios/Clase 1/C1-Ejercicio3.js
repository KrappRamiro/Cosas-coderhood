//Krapp ejercicio 3 "Dia de paga"
console.clear()
console.log("Programa iniciado")
var cantidadRepartidores = 5
var esFeriado = true
var recaudadoDia
var porcentajeSueldos
var sueldoNetoRepartidor
var gananciaComercioFinal

if (esFeriado) {
    console.log("Es feriado! el porcentaje de sueldos sera del 80%")
    porcentajeSueldos = 80
}
else {
    porcentajeSueldos = 65 
    console.log("No es feriado, el porcentaje de sueldos sera del 65%")
}

recaudadoDia = 8000
sueldoNetoRepartidor = ( ( recaudadoDia*(porcentajeSueldos/100) )/cantidadRepartidores )
gananciaComercioFinal = (recaudadoDia - sueldoNetoRepartidor*cantidadRepartidores)
console.log("Lo recaudado hoy es $" + recaudadoDia)
console.log("EL sueldo neto de cada repartidor es de $"+sueldoNetoRepartidor)
console.log("La ganancia del comercio es igual a $" + gananciaComercioFinal)

console.log("Fin del programa")