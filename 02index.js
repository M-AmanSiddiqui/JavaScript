// Lecture: Data Types

"use strict";  //treat all JS code as newer version

// let name = "aman"

// let age =  18

// let isLoggedIn = false

// number    => 2 to power 53
// bigint
// String    => ""
// Boolean   => true/false
// null      => standalone value
// undefined => 
// symbol    => unique




// object
// console.log(typeof null); //object

// console.log(typeof undefined); //undefined


// let score = "33abc"

// console.log(typeof score); //string 
// console.log(typeof (score)); //string 


 // let valueInNumber = Number(score)
// console.log(typeof valueInNumber) //number 
// console.log(valueInNumber); // NaN 

//agr hmary score varibale aesa hota  then 
//let score = "33"
//output 33

//agr hmary score varibale aesa hota  then 
//let score = "33abc"
//output NaN

//agr hmary score varibale aesa hota  then 
//let score = null
//output 0

//agr hmary score varibale aesa hota  
//let score = undefined
//then output NAN

//agr hmary score varibale aesa hota  
//let score = true
//then output 1

//agr hmary score varibale aesa hota  then 
//let score = false
//output 0


// ****************************************** Operations ******************************************************//

// let num1, num2, num3
// num1  = num2 = num3 = 2 + 2
// let gameCounter = 100
// ++gameCounter
// console.log(gameCounter);


// ****************************************** Comparison *******************************************************//

// Primitive
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt



// Reference (Non Primitive)
// 3 Types: Array, Objects, function 


// console.log(null > 0); //false
// console.log(null == 0); //false
 // console.log(null >= 0); //true

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false


// Symbol
// const id = Symbol('1234')
// const anotherId = Symbol('1234')
// console.log(id == anotherId); //false

 // BigInt

// const bigNumber = 65746753766377687878n

// Array

// const hero = ["pakistan", "India" , "UK"]

// Object
 
// let myObj = {
//     name: "Aman"
//     age: "20"
// } 

//  function
// const myFunction = function(){

//     console.log("hello World");
    
// }



// ****************************************** Memory *******************************************************//


// Stack (Primitive) , Heap (Non-Primitive)


// let myYoutubename = "Amam"
// let anotherName = myYoutubename
// anotherName = "Siddiqui"


// let user1 = {
//     email: "user@gmail.com",
//     upi: "user"
// }

// let user2 = user1


// user2.email = "azan@gmail.com"
// console.log(user1.email);
// console.log(user2.email);


// String


const name = "aman"
const age = 20
console.log(name + age + " Siddiqui");

console.log(`Hello My name is ${name} and my age is ${age}`);

const gameName = new String("aman")

