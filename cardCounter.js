let count = 0;

// simple function returning the count of playing cards, +1 2-6, 0 7-9, -1 10-A
function cc(card) {
  if(card < 7 && card > 1){
    count++;
    
  } else if(card >= 7 && card <= 9) {
   
    
  }else{
    count--;
   
  }if(count > 0){
  return `${count} Bet`;
} else {
  return `${count} Hold`;
}
}

