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
console.log(rainbow);


// combining arrays together with .concat 
let fish = ["Salmon", "Cod", "Trout"];
let mammals = ["Sheep", "Cat", "Tiger"];
let animals = fish.concat(mammals);
console.log(animals);

//combining 3 arrays with multiple arrays passed as arguments with .concat()
let originals = ["Hope", "Empire", "Jedi"];
let prequels = ["Phantom", "Clones", "Sith"];
let sequels = ["Awakens", "Last", "Rise"];
let starWars = prequels.concat(originals, sequels);
console.log(starWars);

//finding an element with .indexOf() with, showing a return of -1 if element is not found
let sizes = ["Small", "Medium", "Large"];
console.log(sizes.indexOf("Medium"));
console.log(sizes.indexOf("Huge"));

let flagOfTheUnitedStatesOfAmerica = ["Red", "White", "Blue"];
console.log(flagOfTheUnitedStatesOfAmerica.indexOf("Blue"));
//Even though "Blue" is found twice in the array, .indexOf() returns only the index of first occurrence
let flagOfArgentina = ["Blue", "White", "Blue"];
console.log(flagOfArgentina.indexOf("Blue"));

// Turning array into a string with .join()
let beatles = ["John", "Paul", "george", "Ringo"];
console.log(beatles.join());
//join the array with no seperator by passing double-quotes "" as an argument
console.log(beatles.join(""));
// set each element on a new line  \n with amepersand & and a space
console.log(beatles.join("&\n"));

//example shows how to call array methods directly on array literals, rather than saving array into variable first
console.log([100, true, false, "hi"].join("-"));

console.log(["X", "X", "X"].join(""));

// Object literal with 3 keys: "title", "released", "director" and associated values. Multiple lines for ease of read
let casablanca = {
    "title": "Casablanca",
    "released": 1942,
    "director": "Michael Curtiz"
};
console.log(casablanca);

//valid identifiers and special characters. quotes must wrap whtie space "," "#", "*"
let obj = {key1: 1, key_2: 2, "key 3": 3, "key#4": 4};
console.log(obj)

//accessing object values by calling name of object with string key in square brackets []

console.log(obj["key 3"]);

console.log(casablanca["title"]);


// for keys that are valid identifiers, use dot notation instead of bracket notation, with key name coming after dot
console.log(obj.key_2);
//methods are called directly on the array you want to work on
//setting values starting with empty object then dot and bracket notation
let dictionary = {};
dictionary.mouse = "A small rodent";
dictionary["computer mouse"] = "A pointing device for computers";
console.log(dictionary);

//changing value follows same syntax
dictionary.mouse = "A furry rodent";
console.log(dictionary);

//getting an array with all the keys using Obkect.keys() console logs (3) ['Kiki', 'Mei', 'Mooona]

let cats = { "Kiki": "black and white", "Mei": "tabby", "Moona": "grey"};
 console.log(Object.keys(cats))


 //getting an array of hte keys and values of an object using Object.entries()
 let chromosomes = {
    koala: 16,
    snail: 24,
    giraffe: 30,
    cat: 38,
 };
 console.log(Object.entries(chromosomes));

 //assigning multiple objects together with Object.asign()
 let physical = {pages: 208, binding: "hardcover"};
 let contents = {genre: "Fiction", subgenre: "Mystery"};
 let book = {};
 //1st argument is the target in this case {empty object}, remaining arguments are sources
 Object.assign(book, physical, contents);
 console.log(book);

 
