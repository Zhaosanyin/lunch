//const args = process.argv;
//console.log(args.);


const args = process.argv.slice(2,4); //figure out the two arguments

//console.log(args.slice(2,4)) checking the string status;

const args1 = args.map(Number); // string to number conversion

console.log(args1.reduce((x,y) => x + y)); // sum two numbers




/* Below just thing over and think over in the whole processing, espcially for the function use

var calTwoNum = function (n1, n2) {
  const calTwo = n1 +n2;
return calTwo;
}
console.log(calTwoNum);
//*/

/*
const args = process.argv;
console.log(Number(args.slice(2,3))+Number(args.slice(3,4)));
*/

/*
var calTwoNum = function () {
  const args = process.argv;
  //const calTwo = 0;
  calTwo = Number(args.slice(2,3))+Number(args.slice(3,4));
return calTwo;
}

//console.log(calTwoNum);*/