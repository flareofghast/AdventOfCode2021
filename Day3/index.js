const load = require('../common/loadfile');

const filePath = '../Day3/input';

function separate(input) {
  const parent = [];

  input.forEach((elm, idx) => {
    elm.split('').forEach((innerElm, index) => {
      if (idx === 0) {
        parent.push([]);
      }
      parent[index].push(parseInt(innerElm));
    });
  });
  return parent;
}

function processInputPart1(input) {
  const positional = separate(input);
  let gammaStr = '';
  positional.forEach((val) => {
    const sorted = val.sort((a, b) => a - b);
    const found = sorted.findIndex((a) => a === 1);
    if (found > (val.length / 2)) {
      gammaStr += '0';
    } else {
      gammaStr += '1';
    }
  });
  const gammaPrs = parseInt(gammaStr, 2);

  // bit flip
  let epsilonStr = (~gammaPrs & 0x3ff).toString(2);

  if (epsilonStr.length < gammaStr.length) {
    do {
      const split = epsilonStr.split('');
      split.unshift('0');
      epsilonStr = split.join('');
    } while (epsilonStr.length < gammaStr.length);
  }

  const epsilonPrs = parseInt(epsilonStr, 2);

  console.log(`gamma = ${gammaPrs}`, `epsilon = ${epsilonPrs}`);

  console.log(`Part 1: ${gammaPrs * epsilonPrs}`);
}

load(filePath, processInputPart1);
