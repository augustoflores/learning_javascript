var number_array = [1,2,3,4,5,6,7,8,9,10]

var new_number_array = number_array.map(function(element){
    return element*3
})
console.log("array * 3: "+new_number_array);

//============================================================

var even_new_number_array = new_number_array.filter(function(element){
    return element % 2 === 0
})

console.log("array pares: "+ even_new_number_array)