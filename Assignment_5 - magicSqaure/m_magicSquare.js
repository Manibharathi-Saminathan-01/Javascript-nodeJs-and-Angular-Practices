"use strict";

const createMagicSquare = function (n) {
  // create the square by using array
  const magicSquare = new Array(n).fill().map(() => Array(n));

  //  Initialize the highest value with nxn
  const highestValue = n * n;

  // Initialize the first value into the square
  let rowIndex = 0;
  let columnIndex = Math.floor(n / 2);
  let value = 1;
  magicSquare[rowIndex][columnIndex] = value;
  value++;

  // Loop through the square for assigning the value of All the cells
  while (value <= highestValue) {
    //  Change the rowIndex and columnIndex value in North east direction.
    rowIndex = rowIndex - 1;
    columnIndex = columnIndex + 1;
    //  If there is no rowIndex only columnIndex
    if (rowIndex == -1 && columnIndex < n && columnIndex >= 0) {
      rowIndex = n - 1;
      magicSquare[rowIndex][columnIndex] = value;
      value++;
      //  If there is no columnIndex only rowIndex
    } else if (rowIndex >= 0 && rowIndex < n && columnIndex == n) {
      columnIndex = columnIndex - n;
      magicSquare[rowIndex][columnIndex] = value;
      value++;
      // If there is no rowIndex and columnIndex
    } else if (rowIndex == -1 && columnIndex == n) {
      rowIndex = rowIndex + 2;
      columnIndex = columnIndex - 1;
      magicSquare[rowIndex][columnIndex] = value;
      value++;
      // If the value is occupied or not
    } else if (magicSquare[rowIndex][columnIndex] !== undefined) {
      rowIndex += 2;
      columnIndex -= 1;
      magicSquare[rowIndex][columnIndex] = value;
      value++;
    } else {
      magicSquare[rowIndex][columnIndex] = value;
      value++;
    }
  }
  return magicSquare;
};

let n = 5;
//  Check if the user given number is odd.
if (n % 2 !== 0) {
  console.table(createMagicSquare(n));
} else
  console.log(
    "Magic square is not generate for a Even number, so please give a Odd number as a input "
  );
