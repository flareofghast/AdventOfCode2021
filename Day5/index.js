const load = require('../common/loadfile');

const filePath = '../Day5/input';

function splitCoods(data) {
  const processedData = [];

  data.forEach((line) => {
    let fromX = 0; let fromY = 0; let toX = 0; let
      toY = 0;
    line.split(/,| -> /).forEach((val, lineIdx) => {
      switch (lineIdx) {
        case 0: fromX = parseInt(val, 10);
          break;
        case 1: fromY = parseInt(val, 10);
          break;
        case 2: toX = parseInt(val, 10);
          break;
        case 3: toY = parseInt(val, 10);
          break;
        default: break;
      }
    });

    processedData.push({
      fromX, fromY, toX, toY,
    });
  });

  return processedData;
}

function ProcessPart1(data) {
  const input = splitCoods(data);
  debugger;
}

load(filePath, ProcessPart1);
