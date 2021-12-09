class Lanternfish {
  constructor(age) {
    this.age = age || 8;
  }

  progressDay() {
    this.age = this.age === 0 ? 6 : this.age -= 1;
  }

  isAgeZero() {
    return this.age === 0;
  }

  toString() {
    return `${this.age}`;
  }
}

function splitData(input) {
  return input.split(',');
}

function processPart1(input, days) {
  const split = splitData(input);
  let lanternfish = [];

  split.forEach((elm) => {
    lanternfish.push(new Lanternfish(elm));
  });

  for (let i = 0; i < days; i++) {
    const newLanternfish = [];
    for (let j = 0; j < lanternfish.length; j++) {
      if (lanternfish[j].isAgeZero()) {
        newLanternfish.push(new Lanternfish());
      }
      lanternfish[j].progressDay();
    }

    if (newLanternfish.length > 0) {
      lanternfish = lanternfish.concat(newLanternfish);
    }
  }

  return lanternfish.length;
}

function processPart2(input, days) {
  const split = splitData(input);
  let lanternfish = {
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0,
  };

  split.forEach((elm) => {
    lanternfish[[elm]] += 1;
  });

  for (let i = 0; i < days; i++) {
    const daily = JSON.parse(JSON.stringify(lanternfish));

    const keys = Object.keys(lanternfish);
    for (let j = keys.length - 1; j >= 0; j--) {
      if (j === 0) {
        daily[[8]] += lanternfish[[0]];
        daily[[6]] += lanternfish[[0]];
      } else {
        daily[[j - 1]] += lanternfish[[j]];
      }
      daily[[j]] -= lanternfish[[j]];
    }

    lanternfish = daily;
  }

  let totalCount = 0;
  Object.values(lanternfish).forEach((elm) => { totalCount += elm; });
  return totalCount;
}

module.exports = { processPart1, processPart2 };
