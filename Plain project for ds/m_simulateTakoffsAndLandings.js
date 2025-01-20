"use strict";

class Airport {
  constructor() {
    this.queueListForTakeoffs = new Array();
    this.queueListForLandings = new Array();
    this.time = 0;
    this.front = 0;
    this.rear = 0;
    this.currentPlane;
  }
  runway_1() {
    let runwayOneStatus = false;
    let holdingPatternOneQueue = new Array();
    let holdingPatterTwoQueue = new Array();
    let takeOffsQueue = new Array();
  }
  runway_2() {
    let runwayTwoStatus = false;
    let holdingPatternOneQueue = new Array();
    let holdingPatterTwoQueue = new Array();
    let takeOffsQueue = new Array();
  }
  runway_3() {
    let runwayThreeStatus = false;
    let takeOffsQueue = new Array();
  }
  insertPlainIntoQueue(input) {
    queueList[this.rear] = input;
  }
  removePlainIntoQueue() {
    if (this.front == this.rear) {
      console.log("The Queue is empty");
    } else {
      currentPlane = this.queueList[this.rear];
    }
    return currentPlane;
  }
  simulateTakeoffAndLandings() {}
}

// if (
//   this.runway_1.holdingPatternQueueOne[0][1] <
//   this.runway_1.holdingPatternQueueTwo[0][1]
// ) {
//   this.runway_1.runway = "landings";
//   this.runway_1.landings = true;
//   this.runway_1.holdingPatternQueueOne.shift();
//   this.runway_1.holdingPatternQueueTwo[0][1] =
//     this.runway_1.holdingPatternQueueTwo[0][1] - 1;
//   this.runway_2.holdingPatternQueueOne[0][1] - 1;
//   console.log(this.runway_1.holdingPatternQueueTwo[0][1]);
// }
