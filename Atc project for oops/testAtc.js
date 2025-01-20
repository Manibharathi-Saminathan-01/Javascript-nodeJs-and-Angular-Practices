"use strict";
const fs = require("fs");

class Atc {
  getData() {
    fs.readFile("inputText.txt", "utf-8", (error, data) => {
      if (error) throw error;
      const inputdata = data.split("\n");
      console.log(inputdata);
      // Here we are calling our initial methods
      kempagowdaAirport.convertingTextFileIntoTerminalCard(inputdata);
      kempagowdaAirport.insertingDatasIntoTheAllQueues();
      kempagowdaAirport.simulateLandingsAndTakeoffsPeriodically();
    });
  }
}
class Airport extends Atc {}
