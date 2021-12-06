const load = require('../common/loadfile');
const BingoBoard = require('./BingoBoard');

const filePath = '../Day4/input';

function GetBallsAndBoards(data) {
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
  return { drawnBalls, Boards };
}

function ProcessPart1(data) {
  const { drawnBalls, Boards } = GetBallsAndBoards(data);

  let winningBall;
  let winningBoard;

  // for each ball drawn loop over the boards until a winner is found
  drawnBalls.some((val) => Boards.some((board) => {
    board.registerBall(val);
    if (board.isWinner) {
      winningBall = val;
      winningBoard = board;
    }
    return board.isWinner;
  }));

  // correct number = 54275
  console.log(winningBall * winningBoard.sumOfUnmarked);
}

function ProcessPart2(data) {
  const { drawnBalls, Boards } = GetBallsAndBoards(data);

  let winningBall;
  let winningBoard;

  const totalBoards = Boards.length;
  let winners = 0;

  // loop over all balls until last winner has been found (assuming every board wins)
  // for each ball drawn, check the boards, if is not already marked a winner
  // register the ball on the board and re-check for win scenario.
  // if it wins now, add to winner count and check if it is the final winner.
  // if it is the final winner, return;
  drawnBalls.some((val) => Boards.some((board) => {
    if (!board.isWinner) {
      board.registerBall(val);
      if (board.isWinner) {
        winners += 1;
        if (winners === totalBoards) {
          winningBall = val;
          winningBoard = board;
          return true;
        }
      }
    }
    return false;
  }));

  // correct number = 13158
  console.log(winningBall * winningBoard.sumOfUnmarked);
}

load(filePath, ProcessPart1);
load(filePath, ProcessPart2);
