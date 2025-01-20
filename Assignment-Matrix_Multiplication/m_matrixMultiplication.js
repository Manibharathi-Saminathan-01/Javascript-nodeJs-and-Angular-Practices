"use strict";
const matrixMultiplication = function (firstMatrix, secondMatrix) {
  let value = 0;
  let productMatrix = new Array(firstMatrix.length).fill(
    new Array(firstMatrix.length)
  );
  //   console.log(productMatrix[0].length);
  if (firstMatrix[0].length !== secondMatrix[0].length) {
    console.log("kbns");
    let valueCount = firstMatrix.length * firstMatrix.length;
    // console.log(valueCount);
    // let k = firstMatrix.length * firstMatrix.length;
    let i = 0;
    let iOfOne = 0;
    let jOfone = 0;
    let j = 0;
    while (iOfOne <= firstMatrix.length) {
      if (jOfone <= firstMatrix.length) {
        value += firstMatrix[iOfOne][jOfone] * secondMatrix[i][j];
        jOfone++;
        i++;
        productMatrix[iOfOne][j] = value;
      }
      jOfone = 0;
      i = 0;
      j++;
      value = 0;
      if (j < secondMatrix.length) {
        value += firstMatrix[iOfOne][jOfone] * secondMatrix[i][j];
        i++;
        productMatrix[iOfOne][j] = value;
        jOfone++;
        // j = 0;
      } else iOfOne++;
    }
    console.log(value);
  }

  return productMatrix;
};
let matrixOne = new Array(2).fill(new Array(3).fill(3));
let matrixTwo = new Array(3).fill(new Array(2).fill(2));
console.table(matrixTwo);
console.table(matrixMultiplication(matrixOne, matrixTwo));
// console.log(matrixOne.length);
