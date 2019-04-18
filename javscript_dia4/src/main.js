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

//
/*
    #
   ##
  ###
 ####
#####
*/