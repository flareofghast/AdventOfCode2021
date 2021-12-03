/* eslint-disable radix */
/* eslint-disable no-plusplus */
const load = require('../common/loadfile');

function ProcessInput(input) {
  const data = input.split('\n');

  let NumIncreased = 0;

  for (let i = 0, j = 1; j <= data.length; i++, j++) {
    const num1 = parseInt(data[i]);
    const num2 = parseInt(data[j]);
    if (num1 < num2) {
      NumIncreased += 1;
    }
  }

  console.log(NumIncreased);
}

load('../Day1/input', ProcessInput);
