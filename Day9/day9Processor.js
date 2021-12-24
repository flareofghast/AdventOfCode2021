const Element = require('../common/Element');

function checkNeighbours(element, board) {
  let lowest = true;
  try {
  // check above
    if (element.y !== 0) {
      if (board[element.y - 1][element.x].value <= element.value) {
        lowest = false;
      }
    }
    // check below
    if (element.y !== board.length - 1) {
      if (board[element.y + 1][element.x].value <= element.value) {
        lowest = false;
      }
    }
    // check right
    if (element.x !== board[element.y].length - 1) {
      if (board[element.y][element.x + 1].value <= element.value) {
        lowest = false;
      }
    }
    // check left
    if (element.x !== 0) {
      if (board[element.y][element.x - 1].value <= element.value) {
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

  console.log(riskCount);
  return { length: lowPoints.length, risk: riskCount };
}

function getBasinRecursiveYDown(element, basin, board) {
  if (element === undefined || element.value == 9) {
    return basin;
  }
  if (!basin.some((elm) => elm.x === element.x && elm.y === element.y)) {
    basin.push(element);
  }
  if (element.y === board.length - 1) {
    return basin;
  }

  return getBasinRecursiveYDown(board[element.y + 1][element.x], basin, board);
}

function getBasinRecursiveYUp(element, basin, board) {
  if (element === undefined || element.value == 9) {
    return basin;
  }
  if (!basin.some((elm) => elm.x === element.x && elm.y === element.y)) {
    basin.push(element);
  }
  if (element.y === 0) {
    return basin;
  }

  // for each X we want to check the Y (vertical)
  let returnedX = basin;

  if (element.x < board[0].length - 1) {
    returnedX = getBasinRecursiveXRight(
      board[element.y][element.x + 1],
      basin,
      board,
    );
  }

  return getBasinRecursiveYUp(board[element.y - 1][element.x], basin, board);
}

function getBasinRecursiveXRight(element, basin, board) {
  if (element === undefined || element.value == 9) {
    return basin;
  }
  if (!basin.some((elm) => elm.x === element.x && elm.y === element.y)) {
    basin.push(element);
  }

  // for each X we want to check the Y (vertical)
  let returnedY = basin;

  if (element.y < board.length - 1) {
    returnedY = getBasinRecursiveYDown(
      board[element.y + 1][element.x],
      basin,
      board,
    );
  }

  if (element.y > 0) {
    returnedY = getBasinRecursiveYUp(
      board[element.y - 1][element.x],
      basin,
      board,
    );
  }

  // return if can't go any further right
  if (element.x === board[element.y].length - 1) {
    return basin;
  }

  return getBasinRecursiveXRight(
    board[element.y][element.x + 1],
    returnedY,
    board,
  );
}

function getBasins(board) {
  const basins = [];

  // Do initial check of top line, if the first value is a 9 it will return empty.
  for (let x = 0, m = board[0].length; x < m; x++) {
    for (let y = 0, n = board.length; y < n; y++) {
      let basinExists = true;
      const basin = getBasinRecursiveXRight(board[y][x], [], board);

      basin.sort((a, b) => Math.hypot(a.x, a.y) - Math.hypot(b.x, b.y));

      // make sure the basin doesn't already exist in our list
      if (basin.length > 0) {
        if (basins.length > 0) {
          for (let i = 0, o = basin.length; i < o; i++) {
            const found = basins.find(
              (bas) => bas.filter((elm) => elm.x === basin[i].x && elm.y === basin[i].y).length > 0,
            );
            if (found === undefined) {
              basinExists = false;
            } else {
              break;
            }
          }
        } else {
          basinExists = false;
        }

        // if it doesn't exist add it to our list
        if (basinExists === false) {
          basins.push(basin);
        }
      }
    }
  }

  return basins;
}

function processPart2(input) {
  const board = populateBoard(input);
  const basins = getBasins(board);

  basins.sort((a, b) => b.length - a.length);

  const top3 = basins.slice(0, 3);
  let size = 1;

  top3.forEach((bas) => {
    size *= bas.length;
  });

  console.log(size);

  return { basins, size };
}

module.exports = { processPart1, processPart2 };
