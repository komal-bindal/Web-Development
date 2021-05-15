//Object Oriented Programming in Javascript
//alows to create objects without creating class
//JSON (Javasript object notation)


var bird = {
    x:100,
    y: 200,
    color: "blue",
    eggs:[1,2,3],
    fly:function(){
        console.log("Bird is flying at", this.x, this.y)
    }
};
console.log(typeof bird);
console.log(bird);

for(let i = 0; i < bird.eggs.length; i++){
    console.log(bird.eggs[i])
}

bird.eggs.forEach(function(element, index){
    console.log(element , index)
});

bird.eggs.forEach(element => {
    console.log(element);
});

//class using function
function Fruit(taste, color){
    this.taste = taste;
    this.color = color;
}

let mango = new Fruit("sweet", "yellow")
let orange = new Fruit("sour", "orange")

let apple = {
    taste: "sweet",
    color: "red"
}
console.log(mango)
console.log(orange)
console.log(apple) // It is not of fruit type

//Class keyword(ECMAScript 2015)
//Class Declaration (Not Hoisted)
class Vegetable{                
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

let ladyFinger = new Vegetable("Lady finger", "green")
console.log(ladyFinger)

//Class Expression (Not Hoisted)
let VegetableExpression = class{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

let brinjal = new VegetableExpression("Brinjal", "purple")
console.log(brinjal)

console.log(typeof Fruit)         //function
console.log(typeof VegetableExpression)        //function
console.log(typeof Vegetable)     //function
