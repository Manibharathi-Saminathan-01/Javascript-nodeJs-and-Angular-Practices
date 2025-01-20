"use strict";

const findPath = function () {
  let mazeTable = new Array(6).fill(1).map(() => Array(6).fill(1));
  let markTable = new Array(6).fill(1).map(() => Array(6).fill(1));
  let possitionStack = [];
  let possiblepossition = new Array(8).fill(1).map(() => Array(2).fill(1));
  // North
  possiblepossition[0][0] = -1;
  possiblepossition[0][1] = 0;
  // North east
  possiblepossition[1][0] = -1;
  possiblepossition[1][1] = 1;
  // Eest
  possiblepossition[2][0] = 0;
  possiblepossition[2][1] = 1;
  // Southeast
  possiblepossition[3][0] = 1;
  possiblepossition[3][1] = 1;
  // south
  possiblepossition[4][0] = 1;
  possiblepossition[4][1] = 0;
  // SouthWest
  possiblepossition[5][0] = 1;
  possiblepossition[5][1] = -1;
  // West
  possiblepossition[6][0] = 0;
  possiblepossition[6][1] = -1;
  // Northwest
  possiblepossition[7][0] = -1;
  possiblepossition[7][1] = -1;

  return possiblepossition;
};
console.table(findPath());
