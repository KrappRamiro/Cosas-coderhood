console.clear()
var contadorImpares=0
var contadorMenoresLimiteSobre2=0
var limite = 13

console.log("Inicio del programa \n---------------")
for(var i=0 ; i<limite; i++)
{
    if( i%2!=0 ) {
        contadorImpares++
    }
    if( i<(limite/2) ){
        contadorMenoresLimiteSobre2++
    }
}
console.log("La cantida de numeros impares es "+ contadorImpares)
console.log("La cantida de números menores que limite/2 es "+ contadorMenoresLimiteSobre2)
console.log("---------------\nFin del programa")
// Nota: Se puede ahorrar el if de limite/2 si directamente se hace "console.log(limite/2)""