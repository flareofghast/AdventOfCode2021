const day8 = require('../Day8/day8Processor');

describe('day8Processor.js', () => {
  const input = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
  edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
  fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
  fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
  aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
  fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
  dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
  bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd |  ed bcgafe cdgba cbgef
  egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg |  gbdfcae bgc cg cgb
  gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc |  fgae cfgab fg bagce`.split('\n');

  it('should return 26 as the total of ones, fours, sevens and eights', () => {
    expect(day8.processPart1(input)).toBe(26);
  });

  it('should return 61229 as the sum of all output values', () => {
    expect(day8.processPart2(input)).toBe(61229);
  });

  it('should return 1', () => {
    const one = ['edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | gc'];
    expect(day8.processPart2(one)).toBe(1);
  });
  it('should return 4', () => {
    const four = ['edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | gfhc'];
    expect(day8.processPart2(four)).toBe(4);
  });
  it('should return 8', () => {
    const eight = ['edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | gfhcabd'];
    expect(day8.processPart2(eight)).toBe(8);
  });
  it('should return 7', () => {
    const seven = ['edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | gfh'];
    expect(day8.processPart2(seven)).toBe(7);
  });
  it('should return 5353', () => {
    const input = ['acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf'];
    expect(day8.processPart2(input)).toBe(5353);
  });
});
