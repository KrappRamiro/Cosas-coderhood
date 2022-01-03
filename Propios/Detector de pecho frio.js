let equiposPechosFrios = ['river', 'independiente', 'san lorenzo', 'huracan']

const persona = { //inicializa objetos con atributos
    nombre: 'pepe',
    edad: 70,
}

persona.equipo = 'chacarita' //agrego un atributo al objeto

function averiguarPechoFrio (equipo) {  //esta funcion busca si un equipo esta dentro de un array, devuelve true o false
    return ( equiposPechosFrios.includes(equipo.toLowerCase()) )
}

if (averiguarPechoFrio(persona.equipo)){
    console.log(persona.nombre + ' es pecho frio')
}
else {
    console.log(persona.nombre + ' no es pecho frio')
}