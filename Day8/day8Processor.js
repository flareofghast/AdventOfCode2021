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

const counts = {
  ones: 0, fours: 0, sevens: 0, eights: 0,
};

function processPart1(input) {
  const splitSorted = splitInput(input).sort((a, b) => a.length - b.length);

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

function processPart2(input) {
  const splitSorted = splitInput(input).sort((a, b) => a.length - b.length);
  const segments = {
    top: '', middle: '', bottom: '', topLeft: '', topRight: '', bottomLeft: '', bottomRight: '',
  };
  const examples = {
    one: '', four: '', seven: '', eight: '',
  };

  // determine an example of unique identifiable segments
  for (let i = 0, n = splitSorted.length; i < n; i++) {
    if (!examples.one || !examples.four || !examples.seven || !examples.eight) {
      switch (splitSorted[i].length) {
        case lengthOfOne:
          if (examples.one !== '') {
            examples.one = splitSorted[i];
          }
          break;
        case lengthOfFour:
          if (examples.four !== '') {
            examples.four = splitSorted[i];
          }
          break;
        case lengthOfSeven:
          if (examples.seven !== '') {
            examples.seven = splitSorted[i];
          }
          break;
        case lengthOfEight:
          if (examples.eight !== '') {
            examples.eight = splitSorted[i];
          }
          break;
        default: break;
      }
    } else { break; }
  }

  debugger;
}

module.exports = { processPart1, processPart2 };
