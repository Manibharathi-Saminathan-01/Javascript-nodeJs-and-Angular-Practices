"use strict";
let coefficientsAndExponent = new Array().fill().map(() => Array());

const calculateAdditionOfPolynomials = function (poynomial1, poynomial2) {
  for (let i = 0; i < poynomial1.length; i++) {
    for (let j = 1; j < poynomial2.length; j++) {
      if (poynomial1[i][j] == poynomial2[i][j]) {
        coefficientsAndExponent.push([
          poynomial1[i][j - 1] + poynomial2[i][j - 1],
          poynomial1[i][j],
        ]);
        console.log(
          `${poynomial1[i][j - 1] + poynomial2[i][j - 1]}x^${poynomial2[i][j]}+`
        );
      } else if (poynomial1[i][j] < polynomialTwo[i][j]) {
        coefficientsAndExponent.push([poynomial2[i][j - 1], poynomial2[i][j]]);
      } else {
        coefficientsAndExponent.push([poynomial1[i][j - 1], poynomial1[i][j]]);
      }
      break;
    }
  }
  return coefficientsAndExponent;
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
console.table(calculateAdditionOfPolynomials(polynomialOne, polynomialTwo));
