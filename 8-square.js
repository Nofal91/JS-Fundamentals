let num = process.argv.slice(2);
if (Number(num[0])) {
  for (let i = 0; i < num[0]; i++) {
    for (let j = 0; j < num; j++) {
      process.stdout.write("X");
    }
    console.log();
  }
} else {
  console.log("Missing size");
}
