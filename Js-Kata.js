let inputText = " Here is my input   ";
inputText.trim();
console.log(inputText)

console.log("Hello\nWorld");


console.log("This string has \"double quotes\" and a \\ backslash character");

console.log("You don't need to escape single quotes");

// 10-15-2025 Js Kata

console.log( "hows this \t   \\ for a backslash...\n for a newLine.....");


let name = "Bruce";
console.log(`Hello, ${name}!`);

console.log(`There are ${60 * 60 * 24} seconds in a day`);

let noun = "moon";
let adverb = "strangely";
let adjective = "red";

console.log(`The ${noun} was ${adverb} ${adjective}`);


let playing = true;
let powerup = true;
let jumping = true;
console.log(powerup && jumping);

let hitByFireball = false;
let touchedByMonster = true;
hitByFireball || touchedByMonster;

let carryingBox = true;
let swimming = false;


console.log(!carryingBox && !swimming);
let alive = false;
console.log(!alive);
// console logs True

console.log(2 + 2 === 4)
console.log("hello" === "hel" + "lo")

// console logs False
console.log(8 !== 8)

// console logs +1 for True, 0 for false
console.log(100 + true);

console.log(0 == false)
console.log("1" == 1);
console.log( "" == false)  
console.log(!!1)
console.log(!!"hi")


let primes = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(primes);
console.log(primes.length - 1)



let ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];   

console.log(ticTacToe)
// Simulate a complete Tic-Tac-Toe game in the console (X wins)
// Run this script with the Live Server extension to see results in the browser console
ticTacToe[0][2] = "x";
ticTacToe[2][0] = "o";
ticTacToe[1][1] = "x";
ticTacToe[0][0] = "x";
 ticTacToe[2][2] = "o";
 ticTacToe[0][1] = "x";


 // kata push method to add element to end of an array
let languages = [];
languages.push("Python");
languages.push("Haskell");
languages.push("JavaScript");
languages.push("Rust");
console.log(languages)


// unshift method to add element to beginning of an array

languages.unshift("Erlang");
console.log(languages);
languages.unshift("C");
languages.unshift("Fortran");
console.log(languages)


// pop method to mutate array, removing last element

languages.pop();
//Rust is removed from the arry confirmed with console.log(languages);
console.log(languages);

// interacting with .pop() with a syntax literal
let bestLanguage = languages.pop();
let message = `My favorite language is ${bestLanguage}.`;
console.log(message)

// Javascript confirmed removed from the array with console.log(languages)  [5] elements left in array 
console.log(languages);

// using shift method to remove first element from the array [4] elements left in the array
let worstLanguage = languages.shift();
message = `My least fabvorite language is ${worstLanguage}`

console.log(message);
// console.log(languages) confirms [4] elements left in the array
console.log(languages)

// 4 methods above practiced and obsrerved in the console .pop() .push() .unshift() .shift()

//colors of the rainbow starting with "Green", added using .push(), .unshift(). .pop() used to removed mistakes.
let rainbow = [];

rainbow.push("Green");
rainbow.unshift("Yellow");
console.log(rainbow);
rainbow.push("Orange");
rainbow.push("Red");
console.log(rainbow);
rainbow.pop();
rainbow.pop();
console.log(rainbow);
rainbow.unshift("Orange");
rainbow.unshift("Red");
console.log(rainbow);
rainbow.push("Blue");
rainbow.push("Indigo");
rainbow.push("Violet");
console.log(rainbow)