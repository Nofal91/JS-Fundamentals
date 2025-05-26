const arg = process.argv[2];

if (arg === undefined) {
  console.log("Not a number");
} else if (Number(arg)) {
  console.log("My number: " + Number(arg));
} else {
  console.log("Not a number");
}
