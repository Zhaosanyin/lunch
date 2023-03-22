
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


const hungry = true;

function whatToDoForLunch(hungry, availableTime) {
  if (availableTime <= 20) {
    console.log("pick up a snack or grab something you have ready at home!");
  } else if (availableTime <= 30) {
    console.log("Maybe going outside isn't such a great idea…");
    } else{
    console.log("this is an intense program after all and you should probably reconsider.");
      }

  return;
}
console.log(whatToDoForLunch(hungry, 30));