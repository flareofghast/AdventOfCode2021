const load = require('../common/loadfile');
const lanternfish = require('./lanternfish');

const filePath = '../Day6/input';

load(filePath, (data) => { console.log(lanternfish.processPart1(data[0], 80)); }); // 361169
load(filePath, (data) => { console.log(lanternfish.processPart2(data[0], 256)); });
