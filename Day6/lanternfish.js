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

module.exports = { processPart1 };
