function add(a, b) {
  return Number(a) && Number(b) ? parseInt(a) + parseInt(b) : NaN;
}

let nums = process.argv.slice(2);

console.log(add(nums[0], nums[1]));
