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