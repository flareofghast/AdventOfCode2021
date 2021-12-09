const day6 = require('../Day6/lanternfish');

test('output correct amount of lanternfish after 1 day', () => {
  const input = '3,4,3,1,2';

  expect(day6.processPart1(input, 1)).toBe(5);
});

test('output correct amount of lanternfish up to 18 days', () => {
  const input = '3,4,3,1,2';

  const result = `2,3,2,0,1
1,2,1,6,0,8
0,1,0,5,6,7,8
6,0,6,4,5,6,7,8,8
5,6,5,3,4,5,6,7,7,8
4,5,4,2,3,4,5,6,6,7
3,4,3,1,2,3,4,5,5,6
2,3,2,0,1,2,3,4,4,5
1,2,1,6,0,1,2,3,3,4,8
0,1,0,5,6,0,1,2,2,3,7,8
6,0,6,4,5,6,0,1,1,2,6,7,8,8,8
5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8
4,5,4,2,3,4,5,6,6,0,4,5,6,6,6,7,7,8,8
3,4,3,1,2,3,4,5,5,6,3,4,5,5,5,6,6,7,7,8
2,3,2,0,1,2,3,4,4,5,2,3,4,4,4,5,5,6,6,7
1,2,1,6,0,1,2,3,3,4,1,2,3,3,3,4,4,5,5,6,8
0,1,0,5,6,0,1,2,2,3,0,1,2,2,2,3,3,4,4,5,7,8
6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8`;

  for (let i = 1; i <= result.split('\n'); i++) {
    expect(day6.processPart1(input, i)).toBe(result.split('\n')[i - 1].split.length());
  }
});

test('output correct amount of lanternfish at 80 days', () => {
  const input = '3,4,3,1,2';
  expect(day6.processPart1(input, 80)).toBe(5934);
});

test('output part2 correct amount of lanternfish at 80 days', () => {
  const input = '3,4,3,1,2';
  expect(day6.processPart2(input, 80)).toBe(5934);
});

test('output part2 correct amount of lanternfish at 256 days', () => {
  const input = '3,4,3,1,2';
  expect(day6.processPart2(input, 256)).toBe(26984457539);
});
