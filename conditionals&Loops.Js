 let speed = 30;
        console.log(`Your current speed is ${speed} mph.`);
        if(speed > 25){
        console.log("Slow down!");
        }


        
//more complex boolean expressions incorporating logical operators


if(speed > 25 && hour > 7 && hour < 16){

}
//schoolHours defined for ease of understanding
let schoolHours = hour > 7 && hour < 16;
if (speed > 25 && schoolHours){

}


//same complex boolean function with meaningful variable
let tooFastForSchool = speed > 25 && hour > 7 && hour < 16;
if(tooFastForSchool){}

