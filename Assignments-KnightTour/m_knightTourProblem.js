"use strict";
// This function returns Knight movements on chess board
const findKnightTour = function (inputValue, rowIndex, columnIndex) {
  let possibleArray = [];
  let count = 1;
  let minimumLenght;
  let visitedPosition = [];
  let minimum;
  let i;
  let j;
  let maximumMoveCount = inputValue * inputValue;
  let chessSquare = new Array(inputValue).fill().map(() => Array(inputValue));

  // This function is used to find the next possible possition for the Knight move
  let checkPossibleMovements = function ([rowIndex, columnIndex]) {
    let nextPossitionArray = [];
    i = rowIndex;
    j = columnIndex;
    //  Right down position
    if (
      i + 1 >= 0 &&
      i + 1 < chessSquare.length &&
      j + 2 >= 0 &&
      j + 2 < chessSquare.length &&
      chessSquare[i + 1][j + 2] == undefined
    ) {
      i += 1;
      j += 2;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    // Right up position

    if (
      i - 1 >= 0 &&
      i - 1 < chessSquare.length &&
      j + 2 >= 0 &&
      j + 2 < chessSquare.length &&
      chessSquare[i - 1][j + 2] == undefined
    ) {
      i -= 1;
      j += 2;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    //   Upper right possition

    if (
      i - 2 >= 0 &&
      i - 2 < chessSquare.length &&
      j + 1 >= 0 &&
      j + 1 < chessSquare.length &&
      chessSquare[i - 2][j + 1] == undefined
    ) {
      i -= 2;
      j += 1;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    //   Upper left possition

    if (
      i - 2 >= 0 &&
      i - 2 < chessSquare.length &&
      j - 1 >= 0 &&
      j - 1 < chessSquare.length &&
      chessSquare[i - 2][j - 1] == undefined
    ) {
      i -= 2;
      j -= 1;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    //   Left upper possition

    if (
      i - 1 >= 0 &&
      i - 1 < chessSquare.length &&
      j - 2 >= 0 &&
      j - 2 < chessSquare.length &&
      chessSquare[i - 1][j - 2] == undefined
    ) {
      i -= 1;
      j -= 2;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    //   Left down possition

    if (
      i + 1 < chessSquare.length &&
      j - 2 >= 0 &&
      j - 2 < chessSquare.length &&
      chessSquare[i + 1][j - 2] == undefined
    ) {
      i += 1;
      j -= 2;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    // Down left possition

    if (
      i + 2 < chessSquare.length &&
      i + 2 >= 0 &&
      j - 1 >= 0 &&
      j - 1 < chessSquare.length &&
      chessSquare[i + 2][j - 1] == undefined
    ) {
      i += 2;
      j -= 1;

      nextPossitionArray.push([i, j]);
    }
    i = rowIndex;
    j = columnIndex;
    // Down right possition

    if (
      i + 2 >= 0 &&
      i + 2 < chessSquare.length &&
      j + 1 >= 0 &&
      j + 1 < chessSquare.length &&
      chessSquare[i + 2][j + 1] == undefined
    ) {
      i += 2;
      j += 1;

      nextPossitionArray.push([i, j]);
    }

    return nextPossitionArray;
  };

  //  This loop works upto last square of the board
  while (visitedPosition.length <= maximumMoveCount) {
    visitedPosition.push([rowIndex, columnIndex]);
    // possible array length
    possibleArray = checkPossibleMovements([rowIndex, columnIndex]);
    // Setting the value to the chess board
    chessSquare[rowIndex][columnIndex] = count;
    count++;
    minimumLenght = 1000;
    // Loop through the possible array. It is for Knight move to the next possition
    for (let index of possibleArray) {
      let lengthOfthePossibleMoves = checkPossibleMovements(index).length;
      // Return the possition which is have minimum movements on the board
      if (minimumLenght > lengthOfthePossibleMoves) {
        minimum = index;
        minimumLenght = lengthOfthePossibleMoves;
      }
    }
    [rowIndex, columnIndex] = minimum;
  }
  console.log(...visitedPosition);
  return chessSquare;
};
console.table(findKnightTour(5, 2, 2));
