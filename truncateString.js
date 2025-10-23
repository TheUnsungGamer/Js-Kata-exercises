//function that shortens a given string length to match numerical input
function truncateString(string, number){

  if(string.length > number){
    string.slice(0, number);
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
}