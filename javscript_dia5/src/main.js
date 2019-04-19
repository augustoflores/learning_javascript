var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var new_number_array = number_array.map(function (element) {
    return element * 3
})

//============================================================

var even_new_number_array = new_number_array.filter(function (element) {
    return element % 2 === 0
})

//var even_new_number_array = new_number_array.filter(element =>{
//    return element % 2 === 0
//})


console.log("array * 3: " + new_number_array)
console.log("array pares: " + even_new_number_array)

//investigar por que es un javascript es un lenguaje prototipado

//sacar el factorial de un numero

var koders_obj = {
    'one': 'Diana',
    'two': "Carlos",
    'three': "Emma"
}


var agus = {
    'cabeza': 1,
    'piernas': 2,
    'ojos': 2,
    'brazos': {
        'derecha': {
            'dedos': 5
        },
        'izquierda': {
            'dedos': 5
        }
    },
    'nombre': 'augusto',
    'apellido_paterno': 'flores',
    'apellido_materno': 'montes',
    'fecha_de_nacimineto': "14/08/1981",
    'tez': 'moreno claro',
    'genero': 'masculino',
    'estatura': '1.83',
    'complexion': "delgado",
    'color_de_cabello': "oscuro"
}
console.log(koders_obj['one'])

console.table(koders_obj)




var koders_array = [{
        'nombre': 'David',
        'edad': 22,
        'genero': 'M',
        'hobbies': [
            'Fotografia',
            'Viajar'
        ]
    },
    {
        'nombre': 'Jorge',
        'edad': 23,
        'genero': 'M',
        'hobbies': [
            'Videojuegos',
            'Lectura',
            'Dibujar'
        ]
    },
    {
        'nombre': 'Erick',
        'edad': 25,
        'genero': 'M',
        'hobbies': [
            'Caligrafia',
            'Videojuegos'
        ]
    },
    {
        'nombre': 'Diana',
        'edad': 27,
        'genero': 'F',
        'hobbies': [
            'Hardware',
            'Videojuegos'
        ]
    },
    {
        'nombre': 'Rodo',
        'edad': 32,
        'genero': 'M',
        'hobbies': [
            'Musica',
            'Programacion'
        ]
    }
]


//todos los nombres
//todos su hobies
//filtrar videojuegos

console.log("Todos los koders: ")
koders_array.forEach(function (element) {
    console.log(element.nombre)
})

var new_koders_array_hobbies = koders_array.map(function (element) {
    return "Hola soy " + element.nombre + " y mis hobbies son: " + element.hobbies.join(",")
})
console.log("Presentense: \n" + new_koders_array_hobbies.join("\n"))

var new_koders_array_videojuegos = koders_array.filter(function (element) {
    return element.hobbies.includes("Videojuegos")
})
console.table(new_koders_array_videojuegos)