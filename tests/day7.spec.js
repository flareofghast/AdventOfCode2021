const day7 = require('../Day7/crabs');

test('part 1 reports correct amount', () => {
  const input = ['16,1,2,0,4,2,7,1,2,14'];

  expect(day7.processPart1(input)).toBe(37);
});

test('part 2 reports correct amount', () => {
  const input = ['16,1,2,0,4,2,7,1,2,14'];

  expect(day7.processPart2(input)).toBe(168);
});
