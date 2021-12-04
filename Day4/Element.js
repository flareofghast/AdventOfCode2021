module.exports = class Element {
  constructor(value, row, column) {
    this.markedVal = false;
    this.value = value;
    this.row = row;
    this.column = column;
  }

  mark(num, cb) {
    if (!this.marked) {
      this.markedVal = num === this.value;
      if (this.marked) {
        cb(num);
      }
    }
  }

  get marked() {
    return this.markedVal;
  }
};
