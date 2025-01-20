"use strict";

const fs = require("fs");

class Airport {
  constructor() {
    this.runway_1 = {
      runway_1: "takeOff" || "landings",
      holdingPatternQueueOne: new Array(),
      holdingPatternQueueTwo: new Array(),
      takeoffQueue: new Array(),
    };
    this.runway_2 = {
      runway_2: "takeOff" || "landings",
      holdingPatternQueueOne: new Array(),
      holdingPatternQueueTwo: new Array(),
      takeoffQueue: new Array(),
    };
    this.runway_3 = {
      runway_3: "takeOff" || "landings",
      takeoffQueue: new Array(),
    };
    this.time = 0;
    this.averageTakeoffWaitingtime = 0;
    this.averageLandingWaitingtime = 0;
    this.averageFlyingTimeOnRemaining = 0;
    this.listOfAverageFlyingTimeOnRemaining = [];
    this.numberOfplainesLandedWithNofuel = 0;
    this.timingsForLandingPlanes = [];
    this.listOfTimingsForLandingPlanes = [];
    this.arrivingPlainesForTakeoffs = [];
    this.arrivingPlainesForLandings = [];
    this.landingAverageQueue = [];
    this.takeoffAverageQueue = [];
  }
  // This method is used to converting textfile into usable datas for our problem.
  convertingTextFileIntoTerminalCard(input) {
    let maximumArrivalsOnTakeoffQueue = input.at(0).at(2);

    this.listOfTimingsForLandingPlanes.push(input.at(2));
    this.listOfTimingsForLandingPlanes.push(input.at(3));
    this.listOfTimingsForLandingPlanes.push(input.at(4));
    // To assiging Even integer id for Arraival plane in takeoff queue.
    let evenValue = 2;
    for (let i = 0; i < maximumArrivalsOnTakeoffQueue; i++) {
      this.arrivingPlainesForTakeoffs.push(evenValue);
      evenValue++;
      evenValue++;
    }
    // To assigning Odd integer id with timing for Arriving plane in landing queue
    let oddValue = 1;
    for (let i = 0; i < maximumArrivalsOnTakeoffQueue; i++) {
      this.arrivingPlainesForLandings.push([
        oddValue,
        +this.listOfTimingsForLandingPlanes[i],
      ]);
      this.timingsForLandingPlanes.push(+this.listOfTimingsForLandingPlanes[i]);
      oddValue++;
      oddValue++;
    }
  }

  insertingDatasIntoTheAllQueues() {
    // Here we are assign landing queues for first 2 runways.
    this.runway_1.holdingPatternQueueOne.push(
      this.arrivingPlainesForLandings[0]
    );
    this.runway_2.holdingPatternQueueOne.push(
      this.arrivingPlainesForLandings[1]
    );
    this.runway_1.holdingPatternQueueTwo.push(
      this.arrivingPlainesForLandings[2]
    );
    // Here we are assign takeoff queues for all 3 runways.
    this.runway_1.takeoffQueue.push(this.arrivingPlainesForTakeoffs[0]);
    this.runway_2.takeoffQueue.push(this.arrivingPlainesForTakeoffs[1]);
    this.runway_3.takeoffQueue.push(this.arrivingPlainesForTakeoffs[2]);
  }
  simulateEmergencyLandings() {
    // Finding How many planes flying time is zero and assigning to Number of planes landed with no fule.
    let numberOfPlanes = 0;
    for (let time of this.listOfTimingsForLandingPlanes) {
      if (time == 0) {
        numberOfPlanes++;
      }
    }
    this.numberOfplainesLandedWithNofuel = numberOfPlanes;
    // If the first holding pattern for Runway 1 includes plane remaining flying time zero then.
    if (this.runway_1.holdingPatternQueueOne.at(0).includes(0)) {
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueOne[0][1]
      );
      // Runway 3
      this.runway_1.holdingPatternQueueOne.shift();
      this.runway_3.runway_3 = "landings";
      this.landingAverageQueue.push(this.time);
      // Runway 1
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueTwo[0][1]
      );
      this.runway_1.holdingPatternQueueTwo.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_1.runway_1 = "landings";
      // Runway 2
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_2.holdingPatternQueueOne[0][1]
      );
      this.runway_2.holdingPatternQueueOne.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_2.runway_2 = "landing";
      // If the second holding pattern queue for Runway 1 includes plane remaining flying time zero then.
    } else if (this.runway_1.holdingPatternQueueTwo.at(0).includes(0)) {
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueTwo[0][1]
      );
      // Runway 3
      this.runway_1.holdingPatternQueueTwo.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_3.runway_3 = "landings";
      // runway 1
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueOne[0][1]
      );
      this.runway_1.holdingPatternQueueOne.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_1.runway_1 = "landings";
      // Runway 2
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_2.holdingPatternQueueOne[0][1]
      );
      this.runway_2.holdingPatternQueueOne.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_2.runway_2 = "landing";
      // If the first holding pattern queue for Runway 2 includes plane remaining flying time zero then.
    } else if (this.runway_2.holdingPatternQueueOne.at(0).includes(0)) {
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_2.holdingPatternQueueOne[0][1]
      );
      // Runway 3
      this.runway_2.holdingPatternQueueOne.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_3.runway_3 = "landings";
      // Runway 1
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueOne[0][1]
      );
      this.runway_1.holdingPatternQueueOne.shift();
      this.runway_1.holdingPatternQueueTwo[0][1] =
        this.runway_1.holdingPatternQueueTwo[0][1] - 1;
      this.landingAverageQueue.push(this.time);
      this.runway_1.runway_1 = "landings";
      // Runway 2
      this.runway_2.takeoffQueue.shift();
      this.takeoffAverageQueue.push(this.time);
      this.runway_2.runway_2 = "Takeoff";
      // Print the first time unit
      this.printPeriodically();
      this.time++;

      // Runway 1
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueTwo[0][1]
      );
      this.runway_1.holdingPatternQueueTwo.shift();
      this.landingAverageQueue.at(this.time);
      this.runway_1.runway_1 = "landings";
      // Runway 3
      this.runway_3.takeoffQueue.shift();
      this.takeoffAverageQueue.push(this.time);
      this.runway_3.runway_3 = "takeoff";
      // After completing then print
      this.printPeriodically();
      this.time++;
      // Runway 1
      this.runway_1.takeoffQueue.shift();
      this.takeoffAverageQueue.push(this.time);
      this.runway_1.runway_1 = "takieoff";
      // If the second holding pattern queue for Runway 2 includes plane remaining flying time zero then.
    } else if (this.runway_2.holdingPatternQueueTwo.at(0).includes(0)) {
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_2.holdingPatternQueueTwo[0][1]
      );
      // Runway 3
      this.runway_2.holdingPatternQueueTwo.shift();
      this.runway_3.runway_3 = "landings";
      this.landingAverageQueue.push(this.time);
      // Runway 1
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueOne[0][1]
      );
      this.runway_1.holdingPatternQueueOne.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_1.runway_1 = "landings";
      // Runway 2
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_2.holdingPatternQueueOne[0][1]
      );
      this.runway_2.holdingPatternQueueOne.shift();
      this.landingAverageQueue.push(this.time);
      this.runway_2.runway_2 = "landing";
      this.printPeriodically();
      this.time++;
    }
    // Increasing time
    this.time++;
  }
  simulateNoEmergencyOnLandings() {
    // Runway 1 is use for landings
    if (
      this.runway_1.holdingPatternQueueOne[0][1] <
      this.runway_1.holdingPatternQueueTwo[0][1]
    ) {
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueOne[0][1]
      );
      this.runway_1.holdingPatternQueueOne.shift();
      this.runway_1.holdingPatternQueueTwo[0][1] =
        this.runway_1.holdingPatternQueueTwo[0][1] - 1;
      this.runway_1.runway_1 = "landing";
      this.landingAverageQueue.push(this.time);
    } else {
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueTwo[0][1]
      );
      this.runway_1.holdingPatternQueueTwo.shift();
      this.runway_1.holdingPatternQueueOne[0][1] =
        this.runway_1.holdingPatternQueueOne[0][1] - 1;
      this.runway_1.runway_1 = "landing";
      this.landingAverageQueue.push(this.time);
    }
    // Runway 2 is use for landings
    this.listOfAverageFlyingTimeOnRemaining.push(
      this.runway_2.holdingPatternQueueOne[0][1]
    );
    this.runway_2.holdingPatternQueueOne.shift();
    this.runway_2.runway_2 = "landings";
    this.landingAverageQueue.push(this.time);
    // Runway 3 is use for takeoffs
    this.runway_3.takeoffQueue.shift();
    this.runway_3.runway_3 = "takeoff";
    this.takeoffAverageQueue.push(this.time);
    this.time++;
  }
  simulateTakeoffs() {
    // Runway 1 is use for takeoffs
    this.runway_1.takeoffQueue.shift();
    this.takeoffAverageQueue.push(this.time);
    this.runway_1.runway_1 = "Takeoff";

    // Runway 2 is use for takeoffs
    this.runway_2.takeoffQueue.shift();
    this.takeoffAverageQueue.push(this.time);
    this.runway_2.runway_2 = "Takoff";

    // Runway 3 is use for takeoffs
    this.runway_3.takeoffQueue.shift();
    this.takeoffAverageQueue.push(this.time);
    this.runway_3.runway_3 = "Takeoff";
  }
  simulateNoEmergencyLandingsSecondPhase() {
    if (
      this.runway_1.holdingPatternQueueOne.length == 0 &&
      this.runway_1.holdingPatternQueueTwo.length == 0
    ) {
      this.simulateTakeoffs();
    } else {
      // Here Runway 1 is use for landings
      this.listOfAverageFlyingTimeOnRemaining.push(
        this.runway_1.holdingPatternQueueTwo[0][1]
      );
      this.runway_1.holdingPatternQueueTwo.shift();
      this.runway_1.runway_1 = "landings";
      this.landingAverageQueue.push(this.time);
      // Runway 2 is use for Takeoffs
      this.runway_2.takeoffQueue.shift();
      this.runway_2.runway_2 = "takeoff";
      this.takeoffAverageQueue.push(this.time);
    }
    // After service of 3 runways, then increase time unit
    this.time++;
    this.printPeriodically();
    // runway 1 is use to takeoffs when all planes are landed
    this.runway_1.takeoffQueue.shift();
    this.runway_1.runway_1 = "takeoff";
    this.takeoffAverageQueue.push(this.time);
    this.time++;
  }
  simulateLandingsAndTakeoffsPeriodically() {
    for (let time of this.listOfTimingsForLandingPlanes) {
      if (time == 0) {
        this.simulateEmergencyLandings();
        this.printPeriodically();
        this.simulateTakeoffs();
        this.printPeriodically();
        return -1;
      }
    }
    this.simulateNoEmergencyOnLandings();
    this.printPeriodically();
    this.simulateNoEmergencyLandingsSecondPhase();
    this.printPeriodically();
  }
  //  Printe the all requirements.
  printPeriodically() {
    console.log("");
    console.log(
      `----------------After completing One time unit ----------------`
    );
    console.log("");
    console.log(
      `Takeoff Queue content of Runway 1 is: PlaneID ${
        this.runway_1.takeoffQueue.length == 0
          ? "NA"
          : this.runway_1.takeoffQueue
      }`
    );
    console.log(
      `The Queue content of Landing holding pattern queue 1 for Runway 1 is : PlaneID ${
        this.runway_1.holdingPatternQueueOne.length == 0
          ? "NA"
          : this.runway_1.holdingPatternQueueOne.at(0).at(0)
      } and time unit is ${
        this.runway_1.holdingPatternQueueOne.length == 0
          ? "NA"
          : this.runway_1.holdingPatternQueueOne.at(0).at(1)
      } mints`
    );
    console.log(
      `The Queue content of Landing holding pattern queue 2 for Runway 1 is : PlaneID ${
        this.runway_1.holdingPatternQueueTwo.length == 0
          ? "NA"
          : this.runway_1.holdingPatternQueueTwo.at(0).at(0)
      } and time unit is ${
        this.runway_1.holdingPatternQueueTwo.length == 0
          ? "NA"
          : this.runway_1.holdingPatternQueueTwo.at(0).at(1)
      } mints`
    );
    console.log(
      `Takeoff Queue content of Runway 2 is: PlaneID ${
        this.runway_2.takeoffQueue.length == 0
          ? "NA"
          : this.runway_2.takeoffQueue
      }`
    );
    console.log(
      `The Queue content of Landing holding pattern queue 1 for Runway 2 is : PlaneID ${
        this.runway_2.holdingPatternQueueOne.length == 0
          ? "NA"
          : this.runway_2.holdingPatternQueueOne.at(0).at(0)
      } and time unit is ${
        this.runway_2.holdingPatternQueueOne.length == 0
          ? "NA"
          : this.runway_2.holdingPatternQueueOne.at(0).at(1)
      } mints`
    );
    console.log(
      `The Queue content of Landing holding pattern queue 2 for Runway 2 is : PlaneID ${
        this.runway_2.holdingPatternQueueTwo.length == 0
          ? "NA"
          : this.runway_2.holdingPatternQueueTwo.at(0).at(0)
      } and time unit is ${
        this.runway_2.holdingPatternQueueTwo.length == 0
          ? "NA"
          : this.runway_2.holdingPatternQueueTwo.at(0).at(1)
      } mints`
    );
    console.log(
      `Takeoff Queue content of Runway 3 is: PlaneID ${
        this.runway_3.takeoffQueue.length == 0
          ? "NA"
          : this.runway_3.takeoffQueue
      }`
    );
    // Here we can calculate average waiting time for landed planes
    let initialValue = 0;
    for (let time of this.landingAverageQueue) {
      this.averageLandingWaitingtime =
        initialValue + time / this.landingAverageQueue.length;
    }
    console.log(
      `The average landing waiting time is : ${this.averageLandingWaitingtime}`
    );

    // Here we can calculate average waiting time for taken off planes.
    let startingValue = 0;
    for (let elmenet of this.takeoffAverageQueue) {
      this.averageTakeoffWaitingtime =
        startingValue + elmenet / this.takeoffAverageQueue.length;
    }
    console.log(
      `The average takeoffs waiting time is : ${this.averageTakeoffWaitingtime}`
    );

    // Here we can calculate the avearage flying time remaining on landings.
    let sumOfFlyTime = 0;

    for (let ele of this.listOfAverageFlyingTimeOnRemaining) {
      sumOfFlyTime += ele;
    }
    this.averageFlyingTimeOnRemaining =
      sumOfFlyTime / this.listOfAverageFlyingTimeOnRemaining.length;
    console.log(
      `The average flying time remaining on landing is : ${this.averageFlyingTimeOnRemaining}`
    );
    // Here we are printing The number of planes landing with no fuel reserve.
    console.log(
      `The number of planes landing with no fuel reserve is : ${this.numberOfplainesLandedWithNofuel} `
    );
  }
}
// const kempagowdaAirport = new Airport();
// Object for Airport class const kempagowdaAirport = new Airport();

fs.readFile("inputText.txt", "utf-8", (error, data) => {
  if (error) throw error;
  const inputdata = data.split("\n");
  // Here we are calling our initial methods
  kempagowdaAirport.convertingTextFileIntoTerminalCard(inputdata);
  kempagowdaAirport.insertingDatasIntoTheAllQueues();
  kempagowdaAirport.simulateLandingsAndTakeoffsPeriodically();
});
