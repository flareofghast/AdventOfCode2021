/* eslint-disable radix */
/* eslint-disable no-plusplus */
const load = require('../common/loadfile');

const filePath = '../Day2/input';

function processInputPart1(input) {
  const data = input.map((val) => val.split(' '));

  let horizontal = 0;
  let depth = 0;

  data.forEach((val) => {
    switch (val[0]) {
      case 'forward':
        horizontal += parseInt(val[1]);
        break;
      case 'down':
        depth += parseInt(val[1]);
        break;
      case 'up':
        depth -= parseInt(val[1]);
        break;
      default:
        break;
    }
  });

  console.log(`Part 1: ${horizontal * depth}`);
}

function processInputPart2(input) {
  const data = input.map((val) => val.split(' '));

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  data.forEach((val) => {
    const parsed = parseInt(val[1]);

    switch (val[0]) {
      case 'forward':
        horizontal += parsed;
        depth += (parsed * aim);
        break;
      case 'down':
        aim += parsed;
        break;
      case 'up':
        aim -= parsed;
        break;
      default:
        break;
    }
  });

  console.log(`Part 2: ${horizontal * depth}`);
}

load(filePath, processInputPart1);
load(filePath, processInputPart2);
