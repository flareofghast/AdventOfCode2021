const Element = require('../common/Element');

module.exports = class BingoBoard {
  constructor(data) {
    this.elements = [];
    this.winner = false;
    this.unmarkedSum = 0;
    data.forEach((line, row) => {
      this.elements.push([]);
      line.split(/\s+/).forEach((val, col) => {
        if (val !== '') {
          this.unmarkedSum += parseInt(val, 10);
          this.elements[row].push(new Element(val, row, col));
        }
      });
    });
  }

  get isWinner() {
    return this.winner;
  }

  get sumOfUnmarked() {
    return this.unmarkedSum;
  }

  updateUnmarked(val) {
    // update the unmarked sum
    this.unmarkedSum -= parseInt(val, 10);
  }

  registerBall(num) {
    const winningColArr = [];
    const winningRowArr = [];
    let winningCol = false;
    let winningRow = true;

    this.elements.forEach((line, row) => {
      winningRowArr.push([]);
      line.forEach((val, col) => {
        if (row === 0) { winningColArr.push([]); }
        // mark the number (only updates if is correct number and is not marked)
        // add the boolean to the collumn
        // update the winningRow (it will remain true if the row is a winner)
        if (val.value === num) {
          val.mark(this.updateUnmarked.bind(this));
        }

        try {
          winningColArr[col].push(val.markedBool);
        } catch (err) {
          console.log(err);
        }

        // add this val to the winning row
        try {
          winningRowArr[row].push(val.markedBool);
        } catch (err) {
          console.log(err);
        }
      });
    });

    // check every row and column to see if there is a winner
    // as we're looking for false we need to check if undefined (meaning only true was found)
    winningRow = winningRowArr.some((col) => col.find((x) => x === false) === undefined);
    winningCol = winningColArr.some((col) => col.find((x) => x === false) === undefined);

    // update board as winner if there is either a winning column or row
    this.winner = winningRow || winningCol;
  }
};
