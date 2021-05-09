/**
 * hoisting
 * two-way pass
 * in first pass, interpreter shifts all definitions to top of code and then run rest of the file.
 * 
 */
console.log(alpha())
console.log(beta())

function alpha(){
    return "ALPHA"
}

function beta(){
    return "BETA"
}

/**
 * another way of defining the function - using let
 * NOTE-- It is not hoisted. let does not let you to use that variable before initialisation. 
 * If so, it will give ReferenceError 
 */

let gamma = function(){
    return "GAMMA"
}

/**
 * Polymorphism - works at implentation level in javascript
 * in C++, JAVA - It works at definition level.
 * 
 */

function area(height, width){
    if(!width){
        return Math.PI * height* height
    }
    return height*width
}
console.log(area(3,4))
console.log(area(2))




if(undefined){ //act as false
    console.log("undefined")
}
if(1){
    console.log("1") //prints
}
if("hjhjknm"){
    console.log("hgfthdt") //prints
}
if(false){
    console.log("false")
}
if(0){ //act as false
    console.log("0")
}
if(null){ //act as false
    console.log("null")
}


/**
 * When we create a function it will automaticaly create a local variable arguments.
 */
function hello(){
    console.log("Hello " + arguments[0] + " " + arguments[1])
}
hello("Komal", "Bindal") //Hello Komal Bindal
hello("komal") //Hello komal undefined