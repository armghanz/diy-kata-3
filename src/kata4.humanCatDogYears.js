const humanCatDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears > 1) {
      catYears = 15 + 9 + (humanYears - 2) * 4;
      dogYears = 15 + 9 + (humanYears - 2) * 5;
    }
    return [humanYears, catYears, dogYears];
  };
  module.exports = humanCatDogYears;