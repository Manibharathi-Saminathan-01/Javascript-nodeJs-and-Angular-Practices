"use strict";
let coefficientsAndExponent = new Array().fill().map(() => Array());
// This function returns a result of polynmial addition.
const calculateAdditionOfPolynomials = function (poynomial1, poynomial2) {
  let columnIndex = 1;
  let polynomialRowValueOfFirstMatrix = 0;
  let polynomialRowValueOfSecondMatrix = 0;
  let polynomialResult = [];
  // this loop is going to the two set of polynomials
  while (
    polynomialRowValueOfFirstMatrix < poynomial1.length ||
    polynomialRowValueOfSecondMatrix < poynomial2.length
  ) {
    // If the Exponent of first Exponent is equal to Exponent of second polynomial the Add the two coefficient
    if (
      poynomial1[polynomialRowValueOfFirstMatrix][columnIndex] ==
      poynomial2[polynomialRowValueOfSecondMatrix][columnIndex]
    ) {
      coefficientsAndExponent.push([
        poynomial1[polynomialRowValueOfFirstMatrix][columnIndex - 1] +
          poynomial2[polynomialRowValueOfSecondMatrix][columnIndex - 1],
        poynomial1[polynomialRowValueOfFirstMatrix][columnIndex],
      ]);
      polynomialRowValueOfFirstMatrix++;
      polynomialRowValueOfSecondMatrix++;
      //  if the first polynomial exponent is greater than second polynomial Exponent then print first polynomial co efficient
    } else if (
      poynomial1[polynomialRowValueOfFirstMatrix][columnIndex] >
      poynomial2[polynomialRowValueOfSecondMatrix][columnIndex]
    ) {
      coefficientsAndExponent.push([
        poynomial1[polynomialRowValueOfFirstMatrix][columnIndex - 1],
        poynomial1[polynomialRowValueOfFirstMatrix][columnIndex],
      ]);
      polynomialRowValueOfFirstMatrix++;
      // if the second polynomial exponent is greater than first polynomial Exponent then print second polynomial co efficient
    } else if (
      poynomial1[polynomialRowValueOfFirstMatrix][columnIndex] <
      poynomial2[polynomialRowValueOfSecondMatrix][columnIndex]
    ) {
      coefficientsAndExponent.push([
        poynomial2[polynomialRowValueOfSecondMatrix][columnIndex - 1],
        poynomial2[polynomialRowValueOfSecondMatrix][columnIndex],
      ]);
      polynomialRowValueOfSecondMatrix++;
    }
  }
  //  This loop is for destructuring array into polynomial string.
  for (
    let rowIndex = 0;
    rowIndex < coefficientsAndExponent.length;
    rowIndex++
  ) {
    for (
      let columnIndex = 0;
      columnIndex < coefficientsAndExponent[0].length;
      columnIndex++
    ) {
      polynomialResult.push(
        ` ${coefficientsAndExponent[rowIndex][columnIndex]}x^${
          coefficientsAndExponent[rowIndex][columnIndex + 1]
        } `
      );
      break;
    }
  }

  return polynomialResult;
};
let polynomialOne = [
  [3, 5],
  [4, 1],
  [5, 0],
];
let polynomialTwo = [
  [7, 6],
  [4, 4],
  [8, 1],
  [2, 0],
];
console.log(
  "The output of polynomial addition is",
  calculateAdditionOfPolynomials(polynomialOne, polynomialTwo).join("+")
);
