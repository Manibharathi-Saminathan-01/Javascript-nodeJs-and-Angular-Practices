"use strict"

class Atc {
    const fs = require("fs");
fs.readFile("inputText.txt", "utf-8", (error, data) => {
    if (error) throw error;
    const inputdata = data.split("\n");
    // Here we are calling our initial methods
    kempagowdaAirport.convertingTextFileIntoTerminalCard(inputdata);
    kempagowdaAirport.insertingDatasIntoTheAllQueues();
    kempagowdaAirport.simulateLandingsAndTakeoffsPeriodically();
  });
}