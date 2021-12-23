const day9 = require('../Day9/day9Processor');

describe('day9Processor.js', () => {
  let input = [];
  beforeEach(() => { input = ['2199943210', '3987894921', '9856789892', '8767896789', '9899965678']; });

  it('returns the correct number of low points', () => {
    expect(day9.processPart1(input).length).toBe(4);
  });

  it('returns the correct risk count', () => {
    expect(day9.processPart1(input).risk).toBe(15);
  });
});
