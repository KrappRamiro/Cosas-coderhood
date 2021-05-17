/*
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
--> Se llega a limite
--> La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
    anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se termine el recorrido
*/
console.clear()
console.log("inicio del programa")
var limite = 20
var final = 10
var acumulador = 0
var contadorPares = 0
var contadorDivisibles3 = 0
var i = 0
while (i>limite || contadorPares<final)
{
    if (i%2==0){
        contadorPares++
    }
    if (i%3==0){
        contadorDivisibles3++
    }
   acumulador += i
i++
}
console.log("La cantidad de numeros multiplos de 3 es " + contadorDivisibles3)
console.log("La suma de todos los números es " + acumulador)
console.log("Final del programa")