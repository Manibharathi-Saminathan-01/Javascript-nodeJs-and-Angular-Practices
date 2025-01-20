let visited = [];
let chessSquare = new Array(5).fill(new Array(5));
let checkMovements = [];
let minArray = [];
let possibleMove = function (rowIndex, columnIndex) {
  //   let minArray = [];
  i = rowIndex;
  j = columnIndex;
  console.log(i, j);
  console.table(visited[visited.length - 1]);
  //  Right down

  if (
    i + 1 >= 0 &&
    i + 1 < chessSquare.length &&
    j + 2 >= 0 &&
    j + 2 < chessSquare.length &&
    [i + 1, j + 2] !== visited[visited.length - 1]
  ) {
    i += 1;
    j += 2;
    console.log(" Right down");

    // visited.push([i, j]);
    // console.log(visited);
    checkMovements.push([i, j]);
    minArray.push([i, j]);
    // console.table(checkMovements);

    console.log(i, j);
    // break;
  }
  i = rowIndex;
  j = columnIndex;
  // Right up

  console.log(i, j);
  if (
    i - 1 >= 0 &&
    i - 1 < chessSquare.length &&
    j + 2 >= 0 &&
    j + 2 < chessSquare.length &&
    [i - 1, j + 2] !== visited[visited.length - 1]
  ) {
    i -= 1;
    j += 2;
    console.log(i, j);
    console.log("Right up");
    checkMovements.push([i, j]);
    minArray.push([i, j]);
    console.log(i, j);
    // break;
  }
  i = rowIndex;
  j = columnIndex;
  //   Upper right

  if (
    i - 2 >= 0 &&
    i - 2 < chessSquare.length &&
    j + 1 >= 0 &&
    j + 1 < chessSquare.length &&
    [i - 2, j + 1] !== visited[visited.length - 1]
  ) {
    i -= 2;
    j += 1;
    console.log("Upper right ");
    checkMovements.push([i, j]);
    minArray.push([i, j]);
  }
  i = rowIndex;
  j = columnIndex;
  //   Upper left

  if (
    i - 2 >= 0 &&
    i - 2 < chessSquare.length &&
    j - 1 >= 0 &&
    j - 1 < chessSquare.length &&
    [i - 2, j - 1] !== visited[visited.length - 1]
  ) {
    i -= 2;
    j -= 1;
    console.log("Upper left");
    checkMovements.push([i, j]);
    minArray.push([i, j]);
  }
  i = rowIndex;
  j = columnIndex;
  //   Left upper

  if (
    i - 1 >= 0 &&
    i - 1 < chessSquare.length &&
    j - 2 >= 0 &&
    j - 2 < chessSquare.length &&
    [i - 1, j - 2] !== visited[visited.length - 1]
  ) {
    i -= 1;
    j -= 2;
    console.log("Left upper");
    checkMovements.push([i, j]);
    minArray.push([i, j]);
  }
  i = rowIndex;
  j = columnIndex;
  //   Left down

  if (
    i + 1 < chessSquare.length &&
    j - 2 >= 0 &&
    j - 2 < chessSquare.length &&
    [i + 1, j - 2] !== visited[visited.length - 1]
  ) {
    i += 1;
    j -= 2;
    console.log("Left down");
    checkMovements.push([i, j]);
    minArray.push([i, j]);
  }
  i = rowIndex;
  j = columnIndex;
  // Down left

  console.log(i, j);
  if (
    i + 2 < chessSquare.length &&
    i + 2 >= 0 &&
    j - 1 >= 0 &&
    j - 1 < chessSquare.length &&
    [i + 2, j - 1] !== visited[visited.length - 1]
  ) {
    i += 2;
    j -= 1;
    console.log("Down left");
    checkMovements.push([i, j]);
    console.log(i, j);
    minArray.push([i, j]);
  }
  i = rowIndex;
  j = columnIndex;
  // Down right

  if (
    i + 2 >= 0 &&
    i + 2 < chessSquare.length &&
    j + 1 >= 0 &&
    j + 1 < chessSquare.length &&
    [i + 2, j + 1] !== visited[visited.length - 1]
  ) {
    i += 2;
    j += 1;
    console.log(i, j);
    console.log("Down right");
    checkMovements.push([i, j]);
    minArray.push([i, j]);
  }
  let count = minArray.length;
  console.log(count);
  console.table(minArray);
  return minArray;
};

visited.push([2, 2]);
console.log(visited);
for (let i = 0; i < checkMovements.length; i++) {
  console.table(possibleMove(minArray[i]));
}
// console.table(possibleMove(2, 2));
