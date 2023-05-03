const raisinAlarm = function(cookie) {
  // Put your solution here
  for (let item of cookie) {
    if (item === "🍇") {
      return "Raisin alert!";
    }
  }

  return "All good!";
};

const raisinAlarmArray = function (cookies) {
  // Put your solution here
  const result = [];
  for (let arr of cookies) {
    result.push(raisinAlarm(arr));
  }
  return result;
};

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);


// expected output

// Raisin alert!
// Raisin alert!
// All good!