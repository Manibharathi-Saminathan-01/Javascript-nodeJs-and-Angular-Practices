"use strict";
import { kempaGowdaAirport } from "./m_airportModuleOne.js";
import { simulateTakeoffs } from "./m_emergencyLandingsModule.js";
import { printPeriodically } from "./m_mainSimulationForTakeoffsAndLandings.js";

export let simulateNoEmergencyOnLandings = function () {
  // Runway 1 is use for landings
  if (
    kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1] <
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1]
  ) {
    kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
      kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1]
    );
    kempaGowdaAirport.runway_1.holdingPatternQueueOne.shift();
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1] =
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1] - 1;
    kempaGowdaAirport.runway_1.runway_1 = "landing";
    kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  } else {
    kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1]
    );
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo.shift();
    kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1] =
      kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1] - 1;
    kempaGowdaAirport.runway_1.runway_1 = "landing";
    kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  }
  // Runway 2 is use for landings
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_2.holdingPatternQueueOne[0][1]
  );
  kempaGowdaAirport.runway_2.holdingPatternQueueOne.shift();
  kempaGowdaAirport.runway_2.runway_2 = "landings";
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  // Runway 3 is use for takeoffs
  kempaGowdaAirport.runway_3.takeoffQueue.shift();
  kempaGowdaAirport.runway_3.runway_3 = "takeoff";
  kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.time++;
};

export let secondPhaseOfNoEmergencyLandings = function () {
  if (
    kempaGowdaAirport.runway_1.holdingPatternQueueOne.length == 0 &&
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo.length == 0
  ) {
    simulateTakeoffs();
  } else {
    // Here Runway 1 is use for landings
    kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1]
    );
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo.shift();
    kempaGowdaAirport.runway_1.runway_1 = "landings";
    kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
    // Runway 2 is use for Takeoffs
    kempaGowdaAirport.runway_2.takeoffQueue.shift();
    kempaGowdaAirport.runway_2.runway_2 = "takeoff";
    kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
  }
  // After service of 3 runways, then increase time unit
  kempaGowdaAirport.time++;
  printPeriodically();
  // runway 1 is use to takeoffs when all planes are landed
  kempaGowdaAirport.runway_1.takeoffQueue.shift();
  kempaGowdaAirport.runway_1.runway_1 = "takeoff";
  kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.time++;
};
