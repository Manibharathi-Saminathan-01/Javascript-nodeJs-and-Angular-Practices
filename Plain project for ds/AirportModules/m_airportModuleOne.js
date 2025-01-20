"use strict";

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
}
// This object is for Airport class.
export const kempaGowdaAirport = new Airport();
