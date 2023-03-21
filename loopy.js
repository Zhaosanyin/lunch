
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