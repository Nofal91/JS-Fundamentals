function factorial(num = 1) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
test=process.argv.slice(2)
console.log(factorial(test[0]));
