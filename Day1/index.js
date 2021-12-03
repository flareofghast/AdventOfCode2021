/* eslint-disable radix */
/* eslint-disable no-plusplus */
const load = require('../common/loadfile');

const filePath = '../Day1/input';

function compareVals(val1, val2) {
  let toReturn = 0;
  if (val1 < val2) {
    toReturn = 1;
  }
  return toReturn;
}

function tallyIncreases(input) {
  let NumIncreased = 0;

  for (let i = 0, j = 1; j <= input.length; i++, j++) {
    const num1 = parseInt(input[i]);
    const num2 = parseInt(input[j]);

    NumIncreased += compareVals(num1, num2);
  }

  return NumIncreased;
}

function ProcessInputPart1(input) {
  console.log(`Part 1: ${tallyIncreases(input)}`);
}

function ProcessInputPart2(input) {
  const slidingData = [];

  for (let i = 0, j = 1, k = 2; k <= input.length; i++, j++, k++) {
    const num1 = parseInt(input[i]);
    const num2 = parseInt(input[j]);
    const num3 = parseInt(input[k]);

    const sum = num1 + num2 + num3;

    slidingData.push(sum);
  }

  console.log(`Part 2: ${tallyIncreases(slidingData)}`);
}

load(filePath, ProcessInputPart1);
load(filePath, ProcessInputPart2);
