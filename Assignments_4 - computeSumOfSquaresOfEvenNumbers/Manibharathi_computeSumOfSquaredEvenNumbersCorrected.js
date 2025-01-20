"use strict";
//  The program is to compute the sum of squares of all even numbers in a list

const computeSumOfSquaresOfEvenNumbers = (inputValues) => {
  // Compute the Even numbers
  const evenNumbers = inputValues.filter(
    (currentValue) => currentValue % 2 == 0
  );

  // Compute the square value of even numbers.
  const squaredValuesOfEvenNumbers = evenNumbers.map((cur) => cur ** 2);

  //  Sum of all squared values of even numbers.
  const sumOfSquaredValue = squaredValuesOfEvenNumbers.reduce(
    (initialValue, currentValue) => initialValue + currentValue,
    0
  );
  return sumOfSquaredValue;
};

console.log(computeSumOfSquaresOfEvenNumbers([1, 21, 43, 12, 4, 17, 22, 10]));
