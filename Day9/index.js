const day9 = require('./day9Processor');
const loadFile = require('../common/loadfile');

const filePath = '../Day9/input';

loadFile(filePath, day9.processPart1);
