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
console.log(reverseSrtring(89676778687));