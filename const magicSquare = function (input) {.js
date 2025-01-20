const magicSquare = function (input) {
  // create the square by using array
  const emptyMatrix = new Array(input).fill().map(() => Array(input).fill());

  //  Initialize the highest value with n*n
  const highestValue = input * input;

  // Initialize the first value into the square
  let row = 0;
  let column = Math.floor(input / 2);
  let value = 1;
  emptyMatrix[row][column] = value;
  value++;

  //  Loop through the square for assigning the value of All the cells
  while (value <= highestValue) {
    //  Change the row and column value in North east direction.
    row = row - 1;
    column = column + 1;
    //  If there is no row only column
    if (row == -1 && column < input && column >= 0) {
      row = input - 1;
      emptyMatrix[row][column] = value;
      value++;
      //  If there is no column only row
    } else if (row >= 0 && row < input && column == input) {
      column = column - input;
      emptyMatrix[row][column] = value;
      value++;
      // If there is no row and column
    } else if (row == -1 && column == input) {
      row = row + 2;
      column = column - 1;
      emptyMatrix[row][column] = value;
      value++;
      // If the value is occupied or not
    } else if (emptyMatrix[row][column] !== undefined) {
      row = row + 2;
      column = column - 1;
      console.log();
      emptyMatrix[row][column] = value;
      value++;
    } else {
      emptyMatrix[row][column] = value;
      value++;
    }
  }
  return emptyMatrix;
};

console.table(magicSquare(3));
