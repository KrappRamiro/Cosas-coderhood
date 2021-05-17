console.clear()
var numero1 = 0
var numero2 = 1
var auxiliar = 0
var repeticiones = 10

for (var i=1 ; i<=repeticiones ; i++)
{
    console.log(numero1)
    auxiliar = numero1+numero2
    numero1 = numero2
    numero2 = auxiliar
}

// Explicacion de 4 secuencias:

//auxiliar va a ser 0+1 = 1
//numero 1 pasa de 0 a 1
//numero 2 pasa de 1 a 1

//auxiliar va a ser 1+1 = 2
//numero 1 va a ser igual = 1
//numero 2 va a ser igual = 2

//auxiliar va a ser 1+2 = 3
//numero 1 va a ser igual = 2
//numero 2 va a ser igual = 3

//auxiliar va a ser 2+3 = 5
//numero 1 va a ser igual = 3
//numero 2 va a ser igual = 5