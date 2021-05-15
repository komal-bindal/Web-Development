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

//variables
// a =10 glabal scope
// let a = 10 block scope
//var a = 10 function scope 
a=1000
console.log(a)//1000
function fun() {
    let a =10;
    console.log(a);//10
    a =100
    console.log(a)//100
}
console.log(a)//1000
 