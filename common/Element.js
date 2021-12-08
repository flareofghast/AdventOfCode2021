module.exports = class Element {
  constructor(value, x, y) {
    this.markedVal = 0;
    this.value = value;
    this.xVal = x;
    this.yVal = y;
  }

  mark(cb) {
    this.markedVal += 1;
    if (cb) {
      cb(this.value);
    }
  }

  get markedNum() {
    return this.markedVal;
  }

  get markedBool() {
    // eslint-disable-next-line eqeqeq
    return this.markedNum == true;
  }

  get x() {
    return this.xVal;
  }

  set x(val) {
    this.xVal = val;
  }

  get y() {
    return this.yVal;
  }

  set y(val) {
    this.yVal = val;
  }
};
