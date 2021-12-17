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
  const sum = splitted.reduce((pv, cv) => parseInt(pv, 10) + parseInt(cv, 10), 0);

  const lowestCostPosition = findMedian(splitted);
  const fuelCount = splitted.reduce((pv, cv) => parseInt(pv, 10) + addFuelCount(lowestCostPosition, parseInt(cv, 10)), 0);

  console.log(fuelCount);
  return fuelCount;
}

function processPart2(input) {
  console.log(fuelCount);
  return fuelCount;
}

module.exports = { processPart1 };
