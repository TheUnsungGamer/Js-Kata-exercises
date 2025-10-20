let addCalls = 0;

function add(x, y){
   addCalls++;
   console.log(`x was ${x} and y was${y}`);
   return x + y;
}