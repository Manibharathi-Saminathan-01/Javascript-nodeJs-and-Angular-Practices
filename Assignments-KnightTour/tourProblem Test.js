let checkMovements = [];
let chessSquare = new Array(3).fill(new Array(3));
let count;
let maximumMoveCount = 3 * 3;
// console.log(chessSquare[0].length);
let minCords;
let visited = [];
visited.push([0, 0]);
console.table(visited);
chessSquare[0][0] = count;
count++;
console.table(chessSquare);

i = 0;
j = 0;
console.log(i, j);
console.table(visited[visited.length - 1]);

let possibleMoves = function () {
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
    console.table(checkMovements);

    console.log(i, j);
    // break;
  }
  i = 0;
  j = 0;
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
    console.log(i, j);
    // break;
  }
  i = 0;
  j = 0;
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
  }
  i = 0;
  j = 0;
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
  }
  i = 0;
  j = 0;
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
  }
  i = 0;
  j = 0;
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
  }
  i = 0;
  j = 0;
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
  }
  i = 0;
  j = 0;
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
  }
};
console.table(checkMovements);
console.log(visited);
while (visited.length <= maximumMoveCount) {
  visited.push([i, j]);
}
