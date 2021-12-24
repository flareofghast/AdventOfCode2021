const day9 = require('../Day9/day9Processor');

describe('day9Processor.js Part1', () => {
  let input = [];
  beforeEach(() => { input = ['2199943210', '3987894921', '9856789892', '8767896789', '9899965678']; });

  it('returns the correct number of low points', () => {
    expect(day9.processPart1(input).length).toBe(4);
  });

  it('returns the correct risk count', () => {
    expect(day9.processPart1(input).risk).toBe(15);
  });
});

describe('day9Processor.js Part2', () => {
  let input = [];
  beforeEach(() => { input = ['2199943210', '3987894921', '9856789892', '8767896789', '9899965678']; });

  it('returns the correct amount of basins', () => {
    expect(day9.processPart2(input).basins.length).toBe(4);
  });

  it('returns the correct value calculated by multiplying together the sizes of the three largest basins', () => {
    expect(day9.processPart2(input).size).toBe(1134);
  });
});
