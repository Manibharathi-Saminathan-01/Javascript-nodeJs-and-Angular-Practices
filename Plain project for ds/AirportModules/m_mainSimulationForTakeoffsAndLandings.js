"use strict";

import { kempaGowdaAirport } from "./m_airportModuleOne.js";
import {
  simulateEmergencyLandings,
  simulateTakeoffs,
} from "./m_emergencyLandingsModule.js";
import {
  secondPhaseOfNoEmergencyLandings,
  simulateNoEmergencyOnLandings,
} from "./m_simulateNoEmergencyOnLandingModule.js";

export let simulateLandingsAndTakeoffsPeriodically = function () {
  for (let time of kempaGowdaAirport.listOfTimingsForLandingPlanes) {
    if (time == 0) {
      simulateEmergencyLandings();
      printPeriodically();
      simulateTakeoffs();
      printPeriodically();
      return -1;
    }
  }
  simulateNoEmergencyOnLandings();
  printPeriodically();
  secondPhaseOfNoEmergencyLandings();
  printPeriodically();
};

//  Printe the all requirements.
export let printPeriodically = function () {
  console.log("");
  console.log(
    `----------------After completing One time unit ----------------`
  );
  console.log("");
  console.log(
    `Takeoff Queue content of Runway 1 is: PlaneID ${
      kempaGowdaAirport.runway_1.takeoffQueue.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_1.takeoffQueue
    }`
  );
  console.log(
    `The Queue content of Landing holding pattern queue 1 for Runway 1 is : PlaneID ${
      kempaGowdaAirport.runway_1.holdingPatternQueueOne.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_1.holdingPatternQueueOne.at(0).at(0)
    } and time unit is ${
      kempaGowdaAirport.runway_1.holdingPatternQueueOne.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_1.holdingPatternQueueOne.at(0).at(1)
    } mints`
  );
  console.log(
    `The Queue content of Landing holding pattern queue 2 for Runway 1 is : PlaneID ${
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_1.holdingPatternQueueTwo.at(0).at(0)
    } and time unit is ${
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_1.holdingPatternQueueTwo.at(0).at(1)
    } mints`
  );
  console.log(
    `Takeoff Queue content of Runway 2 is: PlaneID ${
      kempaGowdaAirport.runway_2.takeoffQueue.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_2.takeoffQueue
    }`
  );
  console.log(
    `The Queue content of Landing holding pattern queue 1 for Runway 2 is : PlaneID ${
      kempaGowdaAirport.runway_2.holdingPatternQueueOne.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_2.holdingPatternQueueOne.at(0).at(0)
    } and time unit is ${
      kempaGowdaAirport.runway_2.holdingPatternQueueOne.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_2.holdingPatternQueueOne.at(0).at(1)
    } mints`
  );
  console.log(
    `The Queue content of Landing holding pattern queue 2 for Runway 2 is : PlaneID ${
      kempaGowdaAirport.runway_2.holdingPatternQueueTwo.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_2.holdingPatternQueueTwo.at(0).at(0)
    } and time unit is ${
      kempaGowdaAirport.runway_2.holdingPatternQueueTwo.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_2.holdingPatternQueueTwo.at(0).at(1)
    } mints`
  );
  console.log(
    `Takeoff Queue content of Runway 3 is: PlaneID ${
      kempaGowdaAirport.runway_3.takeoffQueue.length == 0
        ? "NA"
        : kempaGowdaAirport.runway_3.takeoffQueue
    }`
  );
  printAllAverages();
};

export let printAllAverages = function () {
  // Here we can calculate average waiting time for landed planes
  let initialValue = 0;
  for (let time of kempaGowdaAirport.landingAverageQueue) {
    kempaGowdaAirport.averageLandingWaitingtime =
      initialValue + time / kempaGowdaAirport.landingAverageQueue.length;
  }
  console.log(
    `The average landing waiting time is : ${kempaGowdaAirport.averageLandingWaitingtime}`
  );

  // Here we can calculate average waiting time for taken off planes.
  let startingValue = 0;
  for (let elmenet of kempaGowdaAirport.takeoffAverageQueue) {
    kempaGowdaAirport.averageTakeoffWaitingtime =
      startingValue + elmenet / kempaGowdaAirport.takeoffAverageQueue.length;
  }
  console.log(
    `The average takeoffs waiting time is : ${kempaGowdaAirport.averageTakeoffWaitingtime}`
  );

  // Here we can calculate the avearage flying time remaining on landings.
  let sumOfFlyTime = 0;

  for (let ele of kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining) {
    sumOfFlyTime += ele;
  }
  kempaGowdaAirport.averageFlyingTimeOnRemaining =
    sumOfFlyTime / kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.length;
  console.log(
    `The average flying time remaining on landing is : ${kempaGowdaAirport.averageFlyingTimeOnRemaining}`
  );
  // Here we are printing The number of planes landing with no fuel reserve.
  console.log(
    `The number of planes landing with no fuel reserve is : ${kempaGowdaAirport.numberOfplainesLandedWithNofuel} `
  );
};
