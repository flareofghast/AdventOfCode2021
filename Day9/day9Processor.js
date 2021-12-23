const Element = require('../common/Element');

function checkNeighbours(element, board) {
  let lowest = true;
  try {
  // check above
    if (element.y !== 0) {
      if (board[element.y - 1][element.x].value < element.value) {
        lowest = false;
      }
    }
    // check below
    if (element.y !== board.length - 1) {
      if (board[element.y + 1][element.x].value < element.value) {
        lowest = false;
      }
    }
    // check right
    if (element.x !== board[element.y].length - 1) {
      if (board[element.y][element.x + 1].value < element.value) {
        lowest = false;
      }
    }
    // check left
    if (element.x !== 0) {
      if (board[element.y][element.x - 1].value < element.value) {
        lowest = false;
      }
    }
  } catch (e) {
    debugger;
  }
  return lowest;
}

function populateBoard(input) {
  const board = [];
  for (let i = 0, n = input.length; i < n; i++) {
    const splitLine = input[i].split('');
    board.push([]);
    for (let k = 0, m = splitLine.length; k < m; k++) {
      board[i].push(new Element(splitLine[k], k, i));
    }
  }
  return board;
}

function getLowPointsHV(board) {
  const lowPoints = [];
  for (let y = 0, n = board.length; y < n; y++) {
    for (let x = 0, m = board[y].length; x < m; x++) {
      if (checkNeighbours(board[y][x], board)) {
        lowPoints.push(board[y][x]);
      }
    }
  }

  return lowPoints;
}

function processPart1(input) {
  const board = populateBoard(input);
  const lowPoints = getLowPointsHV(board);
  let riskCount = 0;

  lowPoints.forEach((elm) => {
    riskCount += parseInt(elm.value, 10) + 1;
  });

  return { length: lowPoints.length, risk: riskCount };
}

module.exports = { processPart1 };
