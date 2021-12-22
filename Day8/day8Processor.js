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

function determineNumber(examples, sequence) {
  let toReturn = -1;
  const sortedSequence = sequence.split('').sort().join('');
  let countMissing = 0;

  switch (sequence.length) {
    case 6:
    // if the sequence contains all of 4 it's a 9
      if (sortedSequence === examples.nine
        || !examples.four.split('').some((elm) => !sortedSequence.includes(elm))) {
        examples.nine === '' ? examples.nine = sortedSequence : null;
        toReturn = 9;
      }
      // if the example doesn't contain all parts of 4 but it contains all the parts of 1 it's a 0
      if (sortedSequence === examples.zero
        || sortedSequence.includes(examples.one[0] && sortedSequence.includes(examples.one[1]))) {
        examples.zero === '' ? examples.zero = sortedSequence : null;
        toReturn = 0;
      }
      // else it's a 6
      examples.six === '' ? examples.six = sortedSequence : null;
      toReturn = 6;
      break;
    case 5:
    // if the sequence contains all the right side (a one) it's a 3
      if (sortedSequence === examples.three
        || !examples.one.split('').some((elm) => !sortedSequence.includes(elm))) {
        examples.three === '' ? examples.three = sortedSequence : null;
        toReturn = 3;
      }

      if (sortedSequence === examples.five) {
        toReturn = 5;
      }
      if (sortedSequence === examples.two) {
        toReturn = 2;
      }

      examples.four.split('').forEach((elm) => {
        if (!sortedSequence.includes(elm)) {
          countMissing += 1;
        }
      });

      if (countMissing === 1) {
        examples.five = sortedSequence;
        toReturn = 5;
      }
      if (countMissing === 2) {
        examples.two = sortedSequence;
        toReturn = 2;
      }
      break;
    case lengthOfFour: toReturn = 4;
      break;
    case lengthOfOne: toReturn = 1;
      break;
    case lengthOfSeven: toReturn = 7;
      break;
    case lengthOfEight: toReturn = 8;
      break;
    default:
      break;
  }
  return toReturn;
}

function processPart1(input) {
  const counts = {
    ones: 0, fours: 0, sevens: 0, eights: 0,
  };
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
  const decoded = [];
  const examples = {
    one: '', four: '', seven: '', eight: '',
  };

  // determine an example of unique identifiable segments
  for (let i = 0, n = splitSorted.length; i < n; i++) {
    if (!examples.one || !examples.four || !examples.seven || !examples.eight) {
      const sortedSequence = splitSorted[i].split('').sort().join('');
      switch (sortedSequence.length) {
        case lengthOfOne:
          if (!examples.one) {
            examples.one = sortedSequence;
          }
          break;
        case lengthOfFour:
          if (!examples.four) {
            examples.four = sortedSequence;
          }
          break;
        case lengthOfSeven:
          if (!examples.seven) {
            examples.seven = sortedSequence;
          }
          break;
        case lengthOfEight:
          if (!examples.eight) {
            examples.eight = sortedSequence;
          }
          break;
        default: break;
      }
    } else { break; }
  }

  splitSorted.forEach((line) => {
    if (decoded.length > 0) {
      if (decoded[decoded.length - 1].length < 4) {
        decoded[decoded.length - 1] = decoded[decoded.length - 1] += determineNumber(examples, line).toString();
      } else {
        decoded.push(determineNumber(examples, line).toString());
      }
    } else {
      decoded.push(determineNumber(examples, line).toString());
    }
  });

  let count = 0;
  decoded.forEach((elm) => {
    count += parseInt(elm, 10);
  });

  console.log(count);
  return count;
}

module.exports = { processPart1, processPart2 };
