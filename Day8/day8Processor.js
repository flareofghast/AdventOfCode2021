const lengthOfOne = 2;
const lengthOfFour = 4;
const lengthOfSeven = 3;
const lengthOfEight = 7;

function splitInput(input) {
  const toReturn = [];
  input.forEach((element) => {
    element.split('|')[1].split(' ').forEach((elm) => (elm === '' ? null : toReturn.push(elm)));
  });

  return toReturn;
}

function processPart1(input) {
  const splitSorted = splitInput(input).sort((a, b) => a.length - b.length);
  const counts = {
    ones: 0, fours: 0, sevens: 0, eights: 0,
  };

  for (let i = 0, n = splitSorted.length; i < n; i++) {
    switch (splitSorted[i].length) {
      case lengthOfOne:
        counts.ones += 1;
        break;
      case lengthOfFour:
        counts.fours += 1;
        break;
      case lengthOfSeven:
        counts.sevens += 1;
        break;
      case lengthOfEight:
        counts.eights += 1;
        break;
      default: break;
    }
  }
  const totalCount = (counts.ones + counts.fours + counts.sevens + counts.eights);
  console.log(totalCount);
  return totalCount;
}

module.exports = { processPart1 };
