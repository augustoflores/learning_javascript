//iterando propiedas de un objeto
/*var car = {
    'color' : {
        'galaxy':{
            'primaryColor' : 'red',
            'secondaryColor':'orange'
        }
    },
    'model' : 'rio',
}

for (key in car){
    if(key === 'model'){ 
        console.log(key.toUpperCase() +": "+car[key])
    }else if(key === 'color'){
        for(colorKey in car[key]){
            console.log(colorKey)
            for(subColorKey in car[key][colorKey]){
                console.log(subColorKey+": "+car[key][colorKey][subColorKey])
            }
        }
    }
}*/


var car_obj = {
    'color' : 'red',
    'brand' : 'KIA',
    'model' : 'Rio',
    getCar  : function () {
        return this.brand + " " + this.model        
    } 
}
console.log(car_obj.getCar());


//definir instancia

var persona_obj = {
    nombre : 'Augusto',
    apellidos : {
        paterno : 'Flores',
        materno : 'Montes'
    },
    fullName : function () {
        return this.nombre+' '+this.apellidos.paterno+' '+this.apellidos.materno        
    }
}
console.log(persona_obj.fullName())


// 

var koders_array = [{
    'nombre': 'David',
    'edad': 22,
    'genero': 'M',
    'hobbies': [
        'Fotografia',
        'Viajar'
    ],
},
{
    'nombre': 'Jorge',
    'edad': 23,
    'genero': 'M',
    'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
    ],

},
{
    'nombre': 'Erick',
    'edad': 25,
    'genero': 'M',
    'hobbies': [
        'Caligrafia',
        'Videojuegos'
    ],

},
{
    'nombre': 'Diana',
    'edad': 27,
    'genero': 'F',
    'hobbies': [
        'Hardware',
        'Videojuegos'
    ],

},
{
    'nombre': 'Rodo',
    'edad': 32,
    'genero': 'M',
    'hobbies': [
        'Musica',
        'Programacion'
    ],

}
]
function Koder(nombre,edad,genero,hobbies) {
    this.nombre= nombre
    this.edad= edad
    this.genero= genero
    this.hobbies = hobbies
    this.saluda = function(){
        return "Hola soy " + this.nombre + " y mis hobbies son: " + this.hobbies.join(",")
    } 
}

koders_array.forEach(function (element) {
    var obj = new Koder(element.nombre,element.edad,element.genero,element.hobbies);
    console.log(obj.saluda());
})


/*var persona_obj = {
    'nombre': 'David',
    'edad': 22,
    'genero': 'M',
    'hobbies': [
        'Fotografia',
        'Viajar'
    ],
    saluda : function(){
        return "Hola soy " + this.nombre + " y mis hobbies son: " + this.hobbies.join(",")
    }
}
console.log(persona_obj.saluda());*/

function Car(color,brand,model,year){
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getCar  = function () {
        return this.brand + " " + this.model        
    } 
}
var firstCar = new Car("Plata","Toyota","Avanza","2015");
console.log(firstCar);