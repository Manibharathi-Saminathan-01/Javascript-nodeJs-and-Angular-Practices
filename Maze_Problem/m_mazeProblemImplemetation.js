"use strict";

// Claas for construct maze table.
class Maze {
  constructor(tableRowSize, tableColumnSize) {
    this.lengthOftheRow = tableRowSize;
    this.lenghtOfTheColumn = tableColumnSize;
    this.movementList = [];
    this.possiblePath = [];
    // 2-Dimentional array for representing Maze
    this.mazeTable = new Array(tableRowSize)
      .fill(1)
      .map(() => Array(tableColumnSize).fill(1));
    // 2-Dimentional array to mark visited possition
    this.markTable = new Array(tableRowSize)
      .fill(0)
      .map(() => Array(tableColumnSize).fill(0));
  }
  // Construct the Maze table for given Black Rat.
  constructMazeFirst() {
    // Entrance of the Maze
    this.mazeTable[0][0] = 0;
    // Exit of the maze
    this.mazeTable[this.lengthOftheRow - 1][this.lenghtOfTheColumn - 1] = 0;
    // Rest of the path represented as a 0, Blocked paths represented as a 1.
    this.mazeTable[0][1] = 0;
    this.mazeTable[0][2] = 0;
    this.mazeTable[0][3] = 0;
    this.mazeTable[1][1] = 0;
    this.mazeTable[1][2] = 0;
    this.mazeTable[2][2] = 0;
    this.mazeTable[3][2] = 0;
    this.mazeTable[3][3] = 0;
  }
  // Construct the Maze table for given White Rat.
  constructMazeSecond() {
    // Entrance of the Maze
    this.mazeTable[0][0] = 0;
    // Exit of the maze
    this.mazeTable[this.lengthOftheRow - 1][this.lenghtOfTheColumn - 1] = 0;
    // Rest of the path represented as a 0, Blocked paths represented as a 1.
    this.mazeTable[0][1] = 0;
    this.mazeTable[0][2] = 0;
    this.mazeTable[0][3] = 0;
    this.mazeTable[1][0] = 0;
    this.mazeTable[1][3] = 0;
    this.mazeTable[1][4] = 0;
    this.mazeTable[2][0] = 0;
    this.mazeTable[2][4] = 0;
    this.mazeTable[3][1] = 0;
    this.mazeTable[4][1] = 0;
    this.mazeTable[4][3] = 0;
    this.mazeTable[5][2] = 0;
    this.mazeTable[5][4] = 0;
  }
  // Construct the Maze table for given Big Rat.
  constructMazeThird() {
    // Entrance of the Maze
    this.mazeTable[0][0] = 0;
    // Exit of the maze
    this.mazeTable[this.lengthOftheRow - 1][this.lenghtOfTheColumn - 1] = 0;
    // Rest of the path represented as a 0, Blocked paths represented as a 1.
    this.mazeTable[0][1] = 0;
    this.mazeTable[0][4] = 0;
    this.mazeTable[0][5] = 0;
    this.mazeTable[1][2] = 0;
    this.mazeTable[1][3] = 0;
    this.mazeTable[1][4] = 0;
    this.mazeTable[1][5] = 0;
    this.mazeTable[2][3] = 0;
    this.mazeTable[2][4] = 0;
    this.mazeTable[3][4] = 0;
    this.mazeTable[4][2] = 0;
    this.mazeTable[4][3] = 0;
    this.mazeTable[5][2] = 0;
    this.mazeTable[6][2] = 0;
    this.mazeTable[6][3] = 0;
    this.mazeTable[6][4] = 0;
    this.mazeTable[7][2] = 0;
    this.mazeTable[7][5] = 0;
    this.mazeTable[7][6] = 0;
  }
  // This method is to find the next possible position.It is searching from the North
  findNextPositionFromNorth(possiblePath) {
    let rowIndex;
    let columnIndex;
    rowIndex = possiblePath[0];
    columnIndex = possiblePath[1];
    if (
      rowIndex !== this.lengthOftheRow &&
      columnIndex !== this.lenghtOfTheColumn
    ) {
      // North position
      if (
        rowIndex - 1 >= 0 &&
        rowIndex - 1 < this.mazeTable.length &&
        columnIndex >= 0 &&
        columnIndex < this.lenghtOfTheColumn &&
        this.mazeTable[rowIndex - 1][columnIndex] == 0 &&
        this.markTable[rowIndex - 1][columnIndex] == 0
      ) {
        this.movementList.push([rowIndex - 1, columnIndex]);
      }
      // North East position
      if (
        rowIndex - 1 >= 0 &&
        rowIndex - 1 < this.mazeTable.length &&
        columnIndex + 1 >= 0 &&
        columnIndex + 1 < this.lenghtOfTheColumn &&
        this.mazeTable[rowIndex - 1][columnIndex + 1] == 0 &&
        this.markTable[rowIndex - 1][columnIndex + 1] == 0
      ) {
        this.movementList.push([rowIndex - 1, columnIndex + 1]);
      }
      // East position
      if (
        rowIndex >= 0 &&
        rowIndex < this.mazeTable.length &&
        columnIndex + 1 >= 0 &&
        columnIndex + 1 < this.lenghtOfTheColumn &&
        this.mazeTable[rowIndex][columnIndex + 1] == 0 &&
        this.markTable[rowIndex][columnIndex + 1] == 0
      ) {
        this.movementList.push([rowIndex, columnIndex + 1]);
      }
      // South East position
      if (
        rowIndex + 1 >= 0 &&
        rowIndex + 1 < this.mazeTable.length &&
        columnIndex + 1 >= 0 &&
        columnIndex + 1 < this.lenghtOfTheColumn &&
        this.mazeTable[rowIndex + 1][columnIndex + 1] == 0 &&
        this.markTable[rowIndex + 1][columnIndex + 1] == 0
      ) {
        this.movementList.push([rowIndex + 1, columnIndex + 1]);
      }
      // Rest of the possitions to check in another function.
      this.findNextPossitionFromWest(rowIndex, columnIndex);
    }
  }
  findNextPossitionFromWest(rowIndex, columnIndex) {
    // South position
    if (
      rowIndex + 1 >= 0 &&
      rowIndex + 1 < this.mazeTable.length &&
      columnIndex >= 0 &&
      columnIndex < this.lenghtOfTheColumn &&
      this.mazeTable[rowIndex + 1][columnIndex] == 0 &&
      this.markTable[rowIndex + 1][columnIndex] == 0
    ) {
      this.movementList.push([rowIndex + 1, columnIndex]);
    }
    // South West position
    if (
      rowIndex + 1 >= 0 &&
      rowIndex + 1 < this.mazeTable.length &&
      columnIndex - 1 >= 0 &&
      columnIndex - 1 < this.lenghtOfTheColumn &&
      this.mazeTable[rowIndex + 1][columnIndex - 1] == 0 &&
      this.markTable[rowIndex + 1][columnIndex - 1] == 0
    ) {
      this.movementList.push([rowIndex + 1, columnIndex - 1]);
    }
    // West position
    if (
      rowIndex >= 0 &&
      rowIndex < this.mazeTable.length &&
      columnIndex - 1 >= 0 &&
      columnIndex - 1 < this.lenghtOfTheColumn &&
      this.mazeTable[rowIndex][columnIndex - 1] == 0 &&
      this.markTable[rowIndex][columnIndex - 1] == 0
    ) {
      this.movementList.push([rowIndex, columnIndex - 1]);
    }
    // North West position
    if (
      rowIndex - 1 >= 0 &&
      rowIndex - 1 < this.mazeTable.length &&
      columnIndex - 1 >= 0 &&
      columnIndex - 1 < this.lenghtOfTheColumn &&
      this.mazeTable[rowIndex - 1][columnIndex - 1] == 0 &&
      this.markTable[rowIndex - 1][columnIndex - 1] == 0
    ) {
      this.movementList.push([rowIndex - 1, columnIndex - 1]);
    }
  }
}

// This is class is a structure for find the possible path to get the chees at the exit.
class WayForExit extends Maze {
  // This method is to find the possible path to the exit.
  findPathToTheExit() {
    // Initially entrance is 0,0.
    let newPosition = [0, 0];
    this.possiblePath.push(newPosition);
    // We have a mark table. after visit the particular co-ordinate then mark is as a 1 in mark table.
    this.markTable[newPosition[0]][newPosition[1]] = 1;
    this.findNextPositionFromNorth(newPosition);
    // This loop runs upto Rat reach the exit possition.
    while (
      newPosition[0] !== this.lengthOftheRow - 1 ||
      newPosition[1] !== this.lenghtOfTheColumn - 2
    ) {
      newPosition = this.movementList.pop();
      // After got the new position then delete all existing co-ordinates
      this.deleteTheListOfMovements();
      this.possiblePath.push(newPosition);
      if (
        newPosition[0] !== this.lengthOftheRow &&
        newPosition[1] !== this.lenghtOfTheColumn
      ) {
        this.deleteTheListOfMovements();
        // We have a mark table. after visit the particular co-ordinate then mark is as a 1 in mark table.
        this.markTable[newPosition[0]][newPosition[1]] = 1;
        this.findNextPositionFromNorth(newPosition);
        // If no possible paths are not there in the maze the print no paths.
      } else {
        console.log("There is no path from the entrance to exit");
      }
    }
    // Finally we have exit co-ordinate in the movement array, then poped out and push into the path array
    newPosition = this.movementList.pop();
    this.possiblePath.push(newPosition);
    console.log(" ");
    console.log("--------------Maze table-----------------");
    console.log(" ");
    console.table(this.mazeTable);
    console.log(" ");
    console.log("--------------Possible path for Rat--------------");
    console.log(" ");
    console.table(this.possiblePath);
  }
  // This method is used to delete the movements array
  deleteTheListOfMovements() {
    if (this.movementList.length == 1) {
      this.movementList.pop();
    } else if (this.movementList.length == 0) {
      return -1;
    } else {
      this.movementList.splice(0, this.movementList.length);
    }
  }
}
// Object for way for exit class. to find the exit for Black rat.
const blackRate = new WayForExit(4, 4);
blackRate.constructMazeFirst();
blackRate.findPathToTheExit();
// Object for way for exit class. to find the exit for White rat.
const whiteRat = new WayForExit(6, 6);
whiteRat.constructMazeSecond();
whiteRat.findPathToTheExit();
// Object for way for exit class. to find the exit for Big rat.
const bigRat = new WayForExit(8, 8);
bigRat.constructMazeThird();
bigRat.findPathToTheExit();
