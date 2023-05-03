
const args = process.argv.slice(2); //figure out the two arguments

//console.log(args.slice(2,4)) checking the string status;

const args1 = args.map(Number); // string to number conversion
//const args1 =argsJ.join();
var diceNumber = function (args1) {
  let newN = [ ];
  for(var i = 0; i<= args1-1; i ++){
    newN[i] = Math.ceil(Math.random() * args1)
}
return newN;
};
//console.log(args1);
console.log(`dice-roller ${diceNumber(args1)}`);