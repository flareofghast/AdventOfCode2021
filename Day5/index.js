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

function ProcessPart1(data) {
  const input = splitCoods(data);

  const marked = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < input.length; i++) {
    const cur = input[i];
    // check for vertical or horizontal only
    if (cur.from.x === cur.to.x || cur.from.y === cur.to.y) {
      const axis = cur.from.x === cur.to.x ? 'Y' : 'X';
      const from = axis === 'Y' ? cur.from.y : cur.from.x;
      const to = axis === 'Y' ? cur.to.y : cur.to.x;
      // eslint-disable-next-line no-plusplus
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
            found = marked.findIndex((a) => a.y === j);
            marked[[found]].x.push({ val: cur.from.x, count: 1 });
          }
        }
      }
    }
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

  const dupeCount = findDupes(marked);

  console.log(dupeCount);
}

load(filePath, ProcessPart1);
