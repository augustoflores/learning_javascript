//dado un objeto sacar el curp de una persona
var persons_data = [
    { 
        'nombre':'David',
        'apPaterno':'Mendez',
        'apMaterno':'Gomez',
        'fechNacimiento':'1991-08-01',
        'genero':'hombre',
    },
    { 
        'nombre':'Diana',
        'apPaterno':'Chiquis',
        'apMaterno':'Gomez',
        'fechNacimiento':'1991-08-04',
        'genero':'mujer',
    },
    { 
        'nombre':'Augusto',
        'apPaterno':'Flores',
        'apMaterno':'Montes',
        'fechNacimiento':'1981-08-14',
        'genero':'hombre',
    },
    { 
        'nombre':'Noemi',
        'apPaterno':'Gonzalez',
        'apMaterno':'Medina',
        'fechNacimiento':'1970-12-23',
        'genero':'Mujer',
    }
]

function Persona(nombre,apPaterno,apMaterno,fechNacimiento,genero) {
    this.nombre=nombre;
    this.apPaterno=apPaterno;
    this.apMaterno=apMaterno;
    this.fechNacimiento=fechNacimiento;
    this.genero=genero;
    this.getCurp = function(){
        return (
            this.apPaterno[0]+
            this.getFirstVowel(apPaterno)+
            this.apMaterno[0]+
            this.nombre[0]+
            this.fechNacimiento.substring(2,4)+
            this.fechNacimiento.substring(5,7)+
            this.fechNacimiento.substring(8)+
            this.genero[0]
            ).toUpperCase();
    };
    this.getFirstVowel= function(str){
        return str.match(/[aeiou]/gi)[0];  
    };
}

persons_data.forEach(function (element) {
    var obj = new Persona(element.nombre,element.apPaterno,element.apMaterno,element.fechNacimiento,element.genero);
    console.log(obj.getCurp());
})


//5 objetoss divs

var divs_data_array=[
    {
        'height':'100px',
        'width':'30px',
        'backgroundColor':'peru'
    },
    {
        'height':'100px',
        'width':'90px',
        'backgroundColor':'red'
    },
    {
        'height':'100px',
        'width':'30px',
        'backgroundColor':'green'
    },
    {
        'height':'100px',
        'width':'40px',
        'backgroundColor':'black'
    },
    {
        'height':'100px',
        'width':'130px',
        'backgroundColor':'blue',
        'position':'absolute',
        'right':0,
        'top':0
    }
]


console.log(document.getElementsByTagName("div"));

var i = 0;
for (let item of document.getElementsByTagName("div")) {
    Object.entries(divs_data_array[i]).forEach(function (element,index) {
        item.style[element[0]]= element[1];
    });
    i++;
}