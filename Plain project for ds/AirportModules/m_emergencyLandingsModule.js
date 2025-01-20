"use strict";

import { printPeriodically } from "./m_mainSimulationForTakeoffsAndLandings.js";
import { kempaGowdaAirport } from "./m_airportModuleOne.js";

export let simulateEmergencyOnlyLandingsOnFirstLhq = function () {
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1]
  );
  // Runway 3
  kempaGowdaAirport.runway_1.holdingPatternQueueOne.shift();
  kempaGowdaAirport.runway_3.runway_3 = "landings";
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  // Runway 1
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1]
  );
  kempaGowdaAirport.runway_1.holdingPatternQueueTwo.shift();
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_1.runway_1 = "landings";
  // Runway 2
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_2.holdingPatternQueueOne[0][1]
  );
  kempaGowdaAirport.runway_2.holdingPatternQueueOne.shift();
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_2.runway_2 = "landing";
};

export let simulateEmergencyOnlyLandingsOnSecondLhq = function () {
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1]
  );
  // Runway 3
  kempaGowdaAirport.runway_1.holdingPatternQueueTwo.shift();
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_3.runway_3 = "landings";
  // runway 1
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1]
  );
  kempaGowdaAirport.runway_1.holdingPatternQueueOne.shift();
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_1.runway_1 = "landings";
  // Runway 2
  kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
    kempaGowdaAirport.runway_2.holdingPatternQueueOne[0][1]
  );
  kempaGowdaAirport.runway_2.holdingPatternQueueOne.shift();
  kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_2.runway_2 = "landing";
};

export let simulateEmergencyLandings = function () {
  // Finding How many planes flying time is zero and assigning to Number of planes landed with no fule.
  let numberOfPlanes = 0;
  for (let time of kempaGowdaAirport.listOfTimingsForLandingPlanes) {
    if (time == 0) {
      numberOfPlanes++;
    }
  }
  kempaGowdaAirport.numberOfplainesLandedWithNofuel = numberOfPlanes;
  // If the first holding pattern for Runway 1 includes plane remaining flying time zero then.
  if (kempaGowdaAirport.runway_1.holdingPatternQueueOne.at(0).includes(0)) {
    simulateEmergencyOnlyLandingsOnFirstLhq();
    // If the second holding pattern queue for Runway 1 includes plane remaining flying time zero then.
  } else if (
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo.at(0).includes(0)
  ) {
    simulateEmergencyOnlyLandingsOnSecondLhq();
    // If the first holding pattern queue for Runway 2 includes plane remaining flying time zero then.
  } else if (
    kempaGowdaAirport.runway_2.holdingPatternQueueOne.at(0).includes(0)
  ) {
    kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
      kempaGowdaAirport.runway_2.holdingPatternQueueOne[0][1]
    );
    // Runway 3
    kempaGowdaAirport.runway_2.holdingPatternQueueOne.shift();
    kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
    kempaGowdaAirport.runway_3.runway_3 = "landings";
    // Runway 1
    kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
      kempaGowdaAirport.runway_1.holdingPatternQueueOne[0][1]
    );
    kempaGowdaAirport.runway_1.holdingPatternQueueOne.shift();
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1] =
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1] - 1;
    kempaGowdaAirport.landingAverageQueue.push(kempaGowdaAirport.time);
    kempaGowdaAirport.runway_1.runway_1 = "landings";
    // Runway 2
    kempaGowdaAirport.runway_2.takeoffQueue.shift();
    kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
    kempaGowdaAirport.runway_2.runway_2 = "Takeoff";
    // Print the first time unit
    printPeriodically();
    kempaGowdaAirport.time++;

    // Runway 1
    kempaGowdaAirport.listOfAverageFlyingTimeOnRemaining.push(
      kempaGowdaAirport.runway_1.holdingPatternQueueTwo[0][1]
    );
    kempaGowdaAirport.runway_1.holdingPatternQueueTwo.shift();
    kempaGowdaAirport.landingAverageQueue.at(kempaGowdaAirport.time);
    kempaGowdaAirport.runway_1.runway_1 = "landings";
    // Runway 3
    kempaGowdaAirport.runway_3.takeoffQueue.shift();
    kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
    kempaGowdaAirport.runway_3.runway_3 = "takeoff";
    // After completing then print
    printPeriodically();
    kempaGowdaAirport.time++;
    // Runway 1
    kempaGowdaAirport.runway_1.takeoffQueue.shift();
    kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
    kempaGowdaAirport.runway_1.runway_1 = "takieoff";
    // If the second holding pattern queue for Runway 2 includes plane remaining flying time zero then.
  }
  // Increasing time
  kempaGowdaAirport.time++;
};

export let simulateTakeoffs = function () {
  // Runway 1 is use for takeoffs
  kempaGowdaAirport.runway_1.takeoffQueue.shift();
  kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_1.runway_1 = "Takeoff";

  // Runway 2 is use for takeoffs
  kempaGowdaAirport.runway_2.takeoffQueue.shift();
  kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_2.runway_2 = "Takoff";

  // Runway 3 is use for takeoffs
  kempaGowdaAirport.runway_3.takeoffQueue.shift();
  kempaGowdaAirport.takeoffAverageQueue.push(kempaGowdaAirport.time);
  kempaGowdaAirport.runway_3.runway_3 = "Takeoff";
};
