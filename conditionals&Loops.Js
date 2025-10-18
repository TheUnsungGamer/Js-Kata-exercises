 let speed = 30;
        console.log(`Your current speed is ${speed} mph.`);
        if(speed > 25){
        console.log("Slow down!");
        }


        
//more complex boolean expressions incorporating logical operators

let hour = 24;
if(speed > 25 && hour > 7 && hour < 16){

}
//schoolHours defined for ease of understanding
let schoolHours = hour > 7 && hour < 16;
if (speed > 25 && schoolHours){

}


//same complex boolean function with meaningful variable
let tooFastForSchool = speed > 25 && hour > 7 && hour < 16;
if(tooFastForSchool){}

// same statements without curly braces

if (speed > 25) console.log("Slow down!");
else console.log("You're driving under the speed limit.");

//scope exercises showing a reference error in line 38: message  variable needs scope

let name = "Philadelphia";

if (name.length > 10) {
       let message = `Hi ${name}, you have a really long name!`;
}
console.log(message)
//fixed scope including the console log within the body of the if statement
if (name.length > 10) {
       let message = `Hi ${name}, you have a really long name!`;
       console.log(message);
}


for (let i = 0; i < 10; i++) {
       console.log(`This is repititon $${i}`);
        
}


let firstName = "Bruce";
let fName = firstName;
for (fName of fNames) {
console.log(fName);
}
console.log(fName)