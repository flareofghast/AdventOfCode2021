/* eslint-disable no-plusplus */
const load = require('../common/loadfile');
const CoordLine = require('./coordLine');

const filePath = '../Day5/input';

function splitCoods(data) {
  const processedData = [];

  data.forEach((line) => {
    processedData.push(new CoordLine(line));
  });

  return processedData;
}

function findX(array, toFind) {
  return array.findIndex((a) => a.val === toFind);
}
function findY(array, toFind) {
  return array.findIndex((a) => a.y === toFind);
}

function processHV(input) {
  const marked = [];

  const filteredInput = input.filter((a) => a.from.x === a.to.x || a.from.y === a.to.y);

  for (let i = 0; i < filteredInput.length; i++) {
    const cur = filteredInput[i];

    const axis = cur.from.x === cur.to.x ? 'Y' : 'X';
    const from = axis === 'Y' ? cur.from.y : cur.from.x;
    const to = axis === 'Y' ? cur.to.y : cur.to.x;

    for (let j = from; j <= to; j++) {
      if (axis === 'X') {
        const found = findY(marked, cur.from.y);
        if (found !== -1) {
          const foundX = findX(marked[[found]].x, j);
          if (foundX !== -1) {
            marked[[found]].x[[foundX]].count += 1;
          } else {
            marked[[found]].x.push({ val: j, count: 1 });
          }
        } else {
          marked.push({ y: cur.from.y, x: [{ val: j, count: 1 }] });
        }
      } else {
        let found = findY(marked, j);
        if (found !== -1) {
          const foundX = findX(marked[[found]].x, cur.from.x);
          if (foundX !== -1) {
            marked[[found]].x[[foundX]].count += 1;
          } else {
            marked[[found]].x.push({ val: cur.from.x, count: 1 });
          }
        } else {
          marked.push({ y: j, x: [] });
          found = findY(marked, j);
          marked[[found]].x.push({ val: cur.from.x, count: 1 });
        }
      }
    }
  }
  return marked;
}

function processDiag(input, lines) {
  const marked = lines;

  const filteredInput = input.filter((a) => a.from.x !== a.to.x && a.from.y !== a.to.y);

  for (let i = 0; i < filteredInput.length; i++) {
    const cur = filteredInput[i];

    if (cur.from.x < cur.to.x) {
      // top left to bottom right
      if (cur.from.y < cur.to.y) {
        for (let { x } = cur.from, { y } = cur.from; x <= cur.to.x && y <= cur.to.y; x++, y++) {
          let found = findY(marked, y);
          if (found !== -1) {
            const foundX = findX(marked[[found]].x, x);
            if (foundX !== -1) {
              marked[[found]].x[[foundX]].count += 1;
            } else {
              marked[[found]].x.push({ val: x, count: 1 });
            }
          } else {
            marked.push({ y, x: [] });
            found = findY(marked, y);
            marked[[found]].x.push({ val: x, count: 1 });
          }
        }
      } else {
        for (let { x } = cur.from, { y } = cur.from; x <= cur.to.x && y >= cur.to.y; x++, y--) {
          let found = findY(marked, y);
          if (found !== -1) {
            const foundX = findX(marked[[found]].x, x);
            if (foundX !== -1) {
              marked[[found]].x[[foundX]].count += 1;
            } else {
              marked[[found]].x.push({ val: x, count: 1 });
            }
          } else {
            marked.push({ y, x: [] });
            found = findY(marked, y);
            marked[[found]].x.push({ val: x, count: 1 });
          }
        }
      }
    } else if (cur.from.y < cur.to.y) {
      for (let { x } = cur.from, { y } = cur.from; x >= cur.to.x && y <= cur.to.y; x--, y++) {
        let found = findY(marked, y);
        if (found !== -1) {
          const foundX = findX(marked[[found]].x, x);
          if (foundX !== -1) {
            marked[[found]].x[[foundX]].count += 1;
          } else {
            marked[[found]].x.push({ val: x, count: 1 });
          }
        } else {
          marked.push({ y, x: [] });
          found = findY(marked, y);
          marked[[found]].x.push({ val: x, count: 1 });
        }
      }
    } else {
      for (let { x } = cur.from, { y } = cur.from; x >= cur.to.x && y >= cur.to.y; x--, y--) {
        let found = findY(marked, y);
        if (found !== -1) {
          const foundX = findX(marked[[found]].x, x);
          if (foundX !== -1) {
            marked[[found]].x[[foundX]].count += 1;
          } else {
            marked[[found]].x.push({ val: x, count: 1 });
          }
        } else {
          marked.push({ y, x: [] });
          found = findY(marked, y);
          marked[[found]].x.push({ val: x, count: 1 });
        }
      }
    }
  }

  return marked;
}

function findDupes(array) {
  let totalDupes = 0;
  array.forEach((elm) => {
    elm.x.forEach((elm2) => {
      if (elm2.count >= 2) {
        totalDupes += 1;
      }
    });
  });

  return totalDupes;
}

function ProcessPart1(data) {
  const input = splitCoods(data);

  const marked = processHV(input);

  const dupeCount = findDupes(marked);

  // 6548
  console.log(dupeCount);
}

function ProcessPart2(data) {
  const input = splitCoods(data);

  let marked = processHV(input);

  marked = processDiag(input, marked);

  const dupeCount = findDupes(marked);

  // 19663
  console.log(dupeCount);
}

load(filePath, ProcessPart1);
load(filePath, ProcessPart2);
