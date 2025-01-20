"use strict";

// Write an arrow function that takes a list of string values and reverses alternative strings.

// This function is to takes a list of string values and reverses alternative strings.

const findReverseTheAlternativeStrings = (inputvalues) => {
  const reversedAlternativeStrings = inputvalues.map(
    (currentValue, currentIndex) =>
      currentIndex % 2 == 0
        ? currentValue
        : currentValue.split("").reverse().join("")
  );
  return reversedAlternativeStrings;
};
console.log(
  findReverseTheAlternativeStrings([
    "Rama",
    "Sita",
    "Krishna",
    "Rukmini",
    "Siva",
    "Parvathi",
  ])
);
