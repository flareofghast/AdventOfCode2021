function splitInput(input) {
  return input.split(',');
}

function addFuelCount(centroid, curPos) {
  let toReturn = 0;
  if (centroid > curPos) {
    toReturn = centroid - curPos;
  } else if (centroid < curPos) {
    toReturn = curPos - centroid;
  }

  return toReturn;
}

function findMedian(array) {
  const half = Math.floor(array.length / 2);
  if (array.length % 2 === 0) { return array[half]; }
  return (array[half - 1] + array[half]) / 2.0;
}

function processPart1(input) {
  const splitted = splitInput(input[0]).sort((a, b) => a - b);
  //

  const lowestCostPosition = findMedian(splitted);
  const fuelCount = splitted.reduce((pv, cv) => parseInt(pv, 10) + addFuelCount(lowestCostPosition, parseInt(cv, 10)), 0);

  console.log(`Part 1: ${fuelCount}`);
  return fuelCount;
}

function getLength(element, average) {
  const difference = Math.abs(element - average);
  // console.log(`difference of ${element} and ${average} = ${difference}`);
  return difference;
}

function addFuelCountPart2(array, average) {
  let cost = 0;
  for (let i = 0, n = array.length; i < n; i++) {
    const difference = getLength(array[i], average);
    let localTotal = 0;

    for (let j = 1; j <= difference; j++) {
      localTotal += j;
    }
    // console.log(localTotal);
    cost += localTotal;
  }

  return cost;
}

function processPart2(input) {
  const splitted = splitInput(input[0]).sort((a, b) => a - b);
  const sum = splitted.reduce((pv, cv) => parseInt(pv, 10) + parseInt(cv, 10), 0);

  const averageUp = Math.ceil(sum / splitted.length);
  const averageDown = Math.floor(sum / splitted.length);

  const fuelCountUp = addFuelCountPart2(splitted, averageUp);
  const fuelCountDown = addFuelCountPart2(splitted, averageDown);

  const fuelCount = fuelCountUp < fuelCountDown ? fuelCountUp : fuelCountDown;

  console.log(`Part 2: ${fuelCount}`);
  return fuelCount;
}

module.exports = { processPart1, processPart2 };
