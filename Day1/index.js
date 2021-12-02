const load = require('../common/loadfile');

function ProcessInput(input) {
  const data = input.split('\n');
  console.log(data);
}

load('https://adventofcode.com/2021/day/1/input', ProcessInput);
