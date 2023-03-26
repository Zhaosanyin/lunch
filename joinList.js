
let joinList = function(arr) {
  let strArr = "";
  for (let i = 0; i < arr.length; i ++) {
    strArr = strArr + arr [i] + ",";
    }   
    //if (i =arr.length -1) {
    //  i = i+1;
    //  strArr =strArr +arr[i] + ".";
    //}
  return strArr;
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(joinList(conceptList));
console.log(conceptList);
//joinList(conceptList);