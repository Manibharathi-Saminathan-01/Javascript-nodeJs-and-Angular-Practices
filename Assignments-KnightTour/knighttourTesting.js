let chessSquare = new Array(3).fill(new Array(3));
const findMovement = function ([i, j]) {
  let main = [i, j];
  let movementArray = [[]];
  //   Right up
  if (i + 1 < chessSquare.length && j + 2 < chessSquare.length) {
    i += 1;
    j += 2;
    movementArray.push([i, j]);
  } // Right down
  if (0 <= i - 1 < chessSquare.length && j + 2 < chessSquare.length) {
    i -= 1;
    j += 2;
    console.log("no");
    checkMovements.push([i, j]);
    i = 0;
    j = 0;
  }
  //   Upper right
  if (0 <= i - 2 < chessSquare.length && j + 2 < chessSquare.length) {
    i -= 2;
    j += 2;
    console.log("yes");
    //   Upper left
  }
  if (0 <= i - 2 < chessSquare.length && j - 1 < chessSquare.length) {
    i -= 2;
    j -= 1;
    console.log("yes");
    //   Left upper
  }
  if (0 <= i - 1 < chessSquare.length && j - 2 < chessSquare.length) {
    i -= 1;
    j -= 2;
    console.log("yes");
    //   Left down
  }
  if (i + 1 < chessSquare.length && 0 <= j - 2 < chessSquare.length) {
    i += 1;
    j -= 2;
    console.log("yes");
    // Down left
  }
  if (i + 2 < chessSquare.length && 0 <= j - 1 < chessSquare.length) {
    i += 2;
    j -= 1;
    console.log();
    // Down right
  }
  if (i + 2 < chessSquare.length && j + 1 < chessSquare.length) {
    j -= 1;
    j += 1;
    console.log(i, j);
  }
};

const findMin = function ([i, j]) {};
