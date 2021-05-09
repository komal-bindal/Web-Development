/**
 * datatypes-->
 * 1. number -- initail value undefined
 * 2. string
 * 3. boolean
 * 4. object
 * 5. undefined
 * 6. function
 */

function a(){
    return 1;
}

/**
 * let a = function (){
 *      return 1;
 * }
 * 
 * here datatype of a = function.
 * a==1 --> false
 * a()==1 --> true
 */

/**
 * TypeError-> when datatypes don't match.
 * eg- let b = 1
 * console.log(b()) --> TypeError
 */


console.log(123,typeof 123); //number
console.log(123.123, typeof 123.123); //number
console.log('a', typeof 'a'); //string
console.log("hjn", typeof "hjn"); //string
console.log('hjn', typeof 'hjn'); //string
console.log(null, typeof null); //object
console.log(true, typeof true); //boolean
console.log(undefined, typeof undefined); //undefined
console.log(a, typeof a); //function
/* output
ƒ a(){
    return 1;
} "function"
*/
console.log(a(), typeof a()); //It will return 1. hence output is 1 number
