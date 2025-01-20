"use strict";
const getMatrixMultiplications = function (firstMatrix, secondMatrix) {
  // This matrix is create for resultant matrix
  let productMatrix = new Array(firstMatrix.length)
    .fill(0)
    .map(() => Array(secondMatrix[0].length));
  //  check the column count of first matrix and row count of second matrix
  if (firstMatrix[0].length == secondMatrix.length) {
    for (let i = 0; i < firstMatrix.length; i++) {
      for (let j = 0; j < secondMatrix.length; j++) {
        // cellvalue is for addition of all rows from first matrix and column from second matrix
        let cellValue = 0;
        for (let k = 0; k < secondMatrix.length; k++) {
          cellValue += firstMatrix[i][k] * secondMatrix[k][j];
        }
        productMatrix[i][j] = cellValue;
      }
    }
  } else {
    console.log("we cant multiply with that matrix");
  }

  return productMatrix;
};
let matrixOne = [
  [1, 2, 3],
  [5, 6, 3],
  [5, 3, 6],
];
let matrixTwo = [
  [6, 4, 8],
  [3, 2, 1],
  [7, 5, 8],
];
console.table(getMatrixMultiplications(matrixOne, matrixTwo));
