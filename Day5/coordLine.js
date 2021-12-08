const Element = require('../common/Element');

module.exports = class CoordLine {
  constructor(line) {
    this.from = {};
    this.to = {};
    let fromX = 0;
    let fromY = 0;
    let toX = 0;
    let toY = 0;

    line.split(/,| -> /).forEach((val, lineIdx) => {
      switch (lineIdx) {
        case 0: fromX = parseInt(val, 10);
          break;
        case 1: fromY = parseInt(val, 10);
          break;
        case 2: toX = parseInt(val, 10);
          break;
        case 3: toY = parseInt(val, 10);
          break;
        default: break;
      }
    });

    const elm1 = new Element('', fromX, fromY);
    const elm2 = new Element('', toX, toY);

    this.from = Math.hypot(fromX, fromY) < Math.hypot(toX, toY)
      ? elm1 : elm2;

    this.to = Math.hypot(fromX, fromY) < Math.hypot(toX, toY)
      ? elm2 : elm1;
  }
};
