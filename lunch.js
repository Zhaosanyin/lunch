// 2nd time
/*I'm hungry and I have 20 minutes for lunch.
I don't know what to do!
--
I'm hungry and I have 50 minutes for lunch.
I don't know what to do!
--
I'm not hungry and I have 30 minutes for lunch.
I don't know what to do!
--
I'm hungry and I have 15 minutes for lunch.
I don't know what to do!

function whatToDoForLunch(hungry, availableTime){
  console.log("hungry is", hungry);
  console.log("available time is", availableTime);
}
console.log(whatToDoForLunch(yes, 30));

function whatToDoForLunch(hungry, availableTime) {
  console.log("hungry is", hungry);
  console.log("availableTime is", availableTime);
}
*/


//const hungry = true;

let whatToDoForLunch = function(availableTime) {
  let whatToDo = "";
  if (availableTime <= 20) {
    whatToDo = "pick up a snack or grab something you have ready at home!";
  } else if (availableTime <= 30) {
    whatToDo = "Maybe going outside isn't such a great idea…";
  } else {
    whatToDo = "this is an intense program after all and you should probably reconsider.";
  }
  return whatToDo;
};
console.log(whatToDoForLunch(30));
