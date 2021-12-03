const load = require('../common/loadfile');

const filePath = '../Day3/input';

function separate(input) {
  const parent = [];
  // for each line in input loop over each value
  // if it's the first line of the input push a nested array for each number to total length of line
  // place each value in position array.
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

function getMostCommon(input) {
  const orig = JSON.parse(JSON.stringify(input));
  let mostCommon = '';

  orig.forEach((val) => {
    const sorted = val.sort((a, b) => a - b);
    // Find the first instance of 1,
    // if it finds 1 > half length, 0 is more common else 1 is more common
    const found = sorted.findIndex((a) => a === 1);

    const halfLength = val.length / 2;

    if (found > halfLength) {
      mostCommon += '0';
    } else if (found < halfLength) {
      mostCommon += '1';
    } else if (found === halfLength) {
      mostCommon += '1';
    }
  });

  return mostCommon;
}

function getMostCommonForPosition(input, index) {
  const orig = JSON.parse(JSON.stringify(input));
  let mostCommon = '';

  const sorted = orig[index].sort((a, b) => a - b);
  const found = sorted.findIndex((a) => a === 1);

  const halfLength = orig[index].length / 2;

  if (found > halfLength) {
    mostCommon += '0';
  } else if (found <= halfLength) {
    mostCommon += '1';
  }

  return mostCommon;
}

function getLeastCommonForPosition(input, index) {
  const orig = JSON.parse(JSON.stringify(input));
  let leastCommon = '';

  const sorted = orig[index].sort((a, b) => a - b);
  const found = sorted.findIndex((a) => a === 1);

  const halfLength = orig[index].length / 2;

  if (found > halfLength) {
    leastCommon += '1';
  } else if (found <= halfLength) {
    leastCommon += '0';
  }

  return leastCommon;
}

function getInverseBinary(intInput) {
  // bit flip
  const leastCommon = (~intInput & 0x3ff).toString(2);
  return leastCommon;
}

function padBinaryToSameLength(BinaryToMatch, BinaryToChange) {
  let binToChange = BinaryToChange;
  if (binToChange.length < BinaryToMatch.length) {
    do {
      const split = binToChange.split('');
      split.unshift('0');
      binToChange = split.join('');
    } while (binToChange.length < BinaryToMatch.length);
  }

  return binToChange;
}

function processInputPart1(input) {
  const positional = separate(input);
  const gammaStr = getMostCommon(positional);
  const gammaPrs = parseInt(gammaStr, 2);

  let epsilonStr = getInverseBinary(gammaPrs);

  epsilonStr = padBinaryToSameLength(gammaStr, epsilonStr);

  const epsilonPrs = parseInt(epsilonStr, 2);

  console.log(`Part 1: ${gammaPrs * epsilonPrs}`);
}

function processInputPart2(input) {
  let toReduce = JSON.parse(JSON.stringify(input));

  for (let i = 0; i < input[0].length; i++) {
    const positional = separate(toReduce);

    if (toReduce.length === 1) { break; }
    const o2MostCommon = getMostCommonForPosition(positional, i);
    toReduce = toReduce.filter((innerVal) => innerVal[i] !== o2MostCommon);
  }
  const o2 = toReduce.pop();

  // reset to find the least common for each position
  toReduce = JSON.parse(JSON.stringify(input));

  for (let i = 0; i < input[0].length; i++) {
    const positional = separate(toReduce);

    if (toReduce.length === 1) { break; }
    const co2LeastCommon = getLeastCommonForPosition(positional, i);
    toReduce = toReduce.filter((innerVal) => innerVal[i] !== co2LeastCommon);
  }

  const co2 = toReduce.pop();

  console.log(`Part 2: ${parseInt(co2, 2) * parseInt(o2, 2)}`);
}

load(filePath, processInputPart1);
load(filePath, processInputPart2);
