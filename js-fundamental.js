/**
 * Getting started with Hello World
 */
// console.log("Hello world");

/**
 * Basic syntax
 */
// sensitive case
// color !== COLOR !== Color

// Reserved keywordsz
// instanceof !== instanceOf

// semicolon
// console.log("First without semicolon")
// console.log("Second without semicolon")
// console.log("Second with add semicolon before loop");

// give you error if you forget to input semicolon on the precedent line
// [1, 2, 8].forEach( console.log )

/**
 * 'use strict'
 * use this when your code is not compatible for old browser (IE) and new one
 */
// 
"use strict"

/**
 * Variables
 * 
 */

// declare variable without value, but do nothing yet
let firstName;
console.log(firstName);// return undefined value

// assign a string as its first value
firstName = "<NAME>";
console.log(firstName);

// declare variable with value
var name = "John";

/**
 * Local variable
 */

// local variables are only available in their own scope
function sayHi() {
    var greeting = "hello!";
    console.log(greeting);
}

sayHi();
// try to display greeting message
// console.log("try to get variable greeting", greeting);

/**
 * global variable
 */
//global variable can be accessed from anywhere inside of our program
var age = 30;

function printAgeOne(){
    // we have access to all other functions within main function
    console.log(`my age: ${age}`);
}

printAgeOne()
console.log("Print after printAgeOne()", age);

// assign new value to age in the function printAgeTwo() scope
function printAgeTwo() {
    age = 25
    console.log(`my new age is now :${age}`)
}

printAgeTwo()
console.log("Print Age after printAgeTwo()", age);

// redeclare age variable in the function printAgeThree() scope
function printAgeThree() {
    var age = 45
    console.log(`my new age variable is now :${age}`)
}

printAgeThree()
console.log("Print Age after printAgeThree()", age);


