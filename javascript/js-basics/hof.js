/**
 * higher order function--
 * pass a function to another function or return a function from another function
 */
function createGreeter(greeting){
    function greet(name){
        console.log(greeting,name())  //If it is getName(),them simply write name.
    }
    return greet
    //in case of return greet(), datatype of g1 will be undefined.
}
let g1 = createGreeter("Good morning")
let g2 = createGreeter("Good evening")

function getName(){
    return document.getElementById("namebox").value
}
console.log(typeof g1) //function
console.log(g1('Komal'))
console.log(g1('Dev'))
console.log(g2('Komal'))
console.log(g2('Dev'))

 