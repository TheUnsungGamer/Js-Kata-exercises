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

console.log(ticTacToe.length)