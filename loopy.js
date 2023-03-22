
for (let loop_n = 100; loop_n <= 200; loop_n += 1 ) {
  if (loop_n % 3 === 0) {
    console.log("loopy");
  }
  if ( loop_n % 4 === 0) {
    console.log ("Lighthouse");
  }
  if ( loop_n % 3 === 0 && loop_n %4 === 0 ) {
    console.log(LoopyLighthouse);
  }
  if (loop_n % 3 != 0 && loop_n %4 != 0) {
    console.log (loop_n);
  }
}

const isHungry = true;
const availableTime = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}