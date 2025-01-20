"use strict";

import { kempaGowdaAirport } from "./m_airportModuleOne.js";
// This method is used to converting textfile into usable datas for our problem.
export let convertingTextFileIntoTerminalCard = function (input) {
  let maximumArrivalsOnTakeoffQueue = input.at(0).at(2);

  kempaGowdaAirport.listOfTimingsForLandingPlanes.push(input.at(2));
  kempaGowdaAirport.listOfTimingsForLandingPlanes.push(input.at(3));
  kempaGowdaAirport.listOfTimingsForLandingPlanes.push(input.at(4));
  // To assiging Even integer id for Arraival plane in takeoff queue.
  let evenValue = 2;
  for (let i = 0; i < maximumArrivalsOnTakeoffQueue; i++) {
    kempaGowdaAirport.arrivingPlainesForTakeoffs.push(evenValue);
    evenValue++;
    evenValue++;
  }
  // To assigning Odd integer id with timing for Arriving plane in landing queue
  let oddValue = 1;
  for (let i = 0; i < maximumArrivalsOnTakeoffQueue; i++) {
    kempaGowdaAirport.arrivingPlainesForLandings.push([
      oddValue,
      +kempaGowdaAirport.listOfTimingsForLandingPlanes[i],
    ]);
    kempaGowdaAirport.timingsForLandingPlanes.push(
      +kempaGowdaAirport.listOfTimingsForLandingPlanes[i]
    );
    oddValue++;
    oddValue++;
  }
};

export let insertingDatasIntoTheAllQueues = function () {
  // Here we are assign landing queues for first 2 runways.
  kempaGowdaAirport.runway_1.holdingPatternQueueOne.push(
    kempaGowdaAirport.arrivingPlainesForLandings[0]
  );
  kempaGowdaAirport.runway_2.holdingPatternQueueOne.push(
    kempaGowdaAirport.arrivingPlainesForLandings[1]
  );
  kempaGowdaAirport.runway_1.holdingPatternQueueTwo.push(
    kempaGowdaAirport.arrivingPlainesForLandings[2]
  );
  // Here we are assign takeoff queues for all 3 runways.
  kempaGowdaAirport.runway_1.takeoffQueue.push(
    kempaGowdaAirport.arrivingPlainesForTakeoffs[0]
  );
  kempaGowdaAirport.runway_2.takeoffQueue.push(
    kempaGowdaAirport.arrivingPlainesForTakeoffs[1]
  );
  kempaGowdaAirport.runway_3.takeoffQueue.push(
    kempaGowdaAirport.arrivingPlainesForTakeoffs[2]
  );
};
