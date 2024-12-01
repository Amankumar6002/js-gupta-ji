// Primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, Big-Int

const score = 100
const scorevalue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);
const bigNumber = 3498765432123456789n

// Reference (Non primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"aman",
    age: 18
}

const myfunction = function(){
    console.log("Hello world");
    
}

console.log(typeof myfunction);
console.log(typeof heros);