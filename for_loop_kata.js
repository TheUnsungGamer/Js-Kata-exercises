   
   //using a callback function to delay execution for 2 seconds
   function sayhi(){
        console.log("Hi!");;
    }
    setTimeout(sayhi, 2000);

    let addExpression = function (x, y) {
      return x + y;
    }
console.log(addExpression(1, 3));