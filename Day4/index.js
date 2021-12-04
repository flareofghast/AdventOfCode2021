const load = require('../common/loadfile');
const BingoBoard = require('./BingoBoard');

const filePath = '../Day4/input';

function ProcessPart1(data) {
  let drawnBalls = [];
  const Boards = [];
  let boardData = [];

  data.forEach((element, idx) => {
    if (idx === 0) {
      drawnBalls = element.split(',');
    } else if (idx > 1) {
      if (element !== '') {
        boardData.push(element);
      } else {
        Boards.push(new BingoBoard(boardData));
        boardData = [];
      }
    }
  });

  let winningBall;
  let winningBoard;

  drawnBalls.some((val, idx) => Boards.some((board) => {
    board.registerBall(val);
    if (board.isWinner) {
      winningBall = val;
      winningBoard = board;
    }
    return board.isWinner;
  }));

  console.log(winningBall * winningBoard.sumOfUnmarked);
}

load(filePath, ProcessPart1);
