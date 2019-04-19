function dolaresaPesos(USD) {
    return pesosaLitros(USD * 18.87).toFixed(2);
}
function pesosaLitros(MXN) {
    return MXN / 20.72;
}
console.log("50 dolares son: " + dolaresaPesos(50) + " lts.");

function reverseSrtring(thestring){
    return thestring.toString().split("").reverse().join("");
}

console.log("string al reves: "+reverseSrtring(89676778687));


function capitalize(sentence){
    return sentence.split("").map(
        function (element,index) {
            if(index === 0 || sentence[index-1] === " " ) element=element.toUpperCase();
            return(element);
        }
    ).join("");
}
console.log(capitalize("welcome to kodemia we have fun and games"));




//Encriptacion cesar
//input es hola
//output ovsh
//7letras en el abecedario

// var str = "abcedefghijklmnñopqrstuvwxyz";
// var n = str.charCodeAt(0);
//console.log(n);

function letterToCesar(letter) {
    letterCode=letter.charCodeAt(0)+7
    //console.log(letterCode)
    if(letterCode>129){
        letterCode -= 25
    }
    return String.fromCharCode(letterCode)
}
function stringToCesar(text) {
    new_string = ""
    for(var i = 0; i < text.length; i++){
        if(text[i]!=" "){
            new_string += letterToCesar(text[i])
        }else{
            new_string += text[i]
        }
    }
    return new_string
}
console.log(stringToCesar("hola"))

//
/*
    #
   ##
  ###
 ####
#####
*/
function triangulo(pisos){
    var triangulo_str=""
    for(var i = 0; i < pisos; i++){
        var char=" "
        for (let ii = 0; ii < pisos; ii++) {
            if(ii === pisos-(i+1)){
                char = "#"
            }
            triangulo_str += char  
        }
        triangulo_str += "\n"
    }
    return triangulo_str
}
console.log(triangulo(7))
