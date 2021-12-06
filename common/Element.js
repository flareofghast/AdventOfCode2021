module.exports = class Element {
  constructor(value, x, y) {
    this.markedVal = 0;
    this.value = value;
    this.x = x;
    this.y = y;
  }

  mark(cb) {
    this.markedVal += 1;
    cb(this.value);
  }

  get markedNum() {
    return this.markedVal;
  }

  get markedBool() {
    // eslint-disable-next-line eqeqeq
    return this.markedNum == true;
  }
};
