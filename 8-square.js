let num = 3; //process.argv.slice(2);
let arr=['X','X']
if (Number(num)) {
  for (let i = 0; i < num; i++) {
      for (let j = 0; j < i-1; j++) {
          //   process.stdout.write("X");
          console.log(i, j);
        }
        console.log(i,i);
  }
}
