const load = require('../common/loadfile');
const crabs = require('./crabs');

const filePath = '../Day7/input';

load(filePath, crabs.processPart1);
load(filePath, crabs.processPart2);
