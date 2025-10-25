
function uniteUnique(arr1, ...arr) {
  //combine the arrays with concat with ...arr passed as argument
  let combined = arr1.concat(...arr);
  //use result to store the pushed array in an empty array
  let result = [];


  for (let i = 0; i < combined.length; i++) {
    //if result dosent include data it is pushed to result array
    if (!result.includes(combined[i])) {
      result.push(combined[i]);
    }
  }

  return result;
}
