"use strict";
import fs from "fs";
import {
  convertingTextFileIntoTerminalCard,
  insertingDatasIntoTheAllQueues,
} from "./m_initializeOfAllTheQueuesModule.js";
import { simulateLandingsAndTakeoffsPeriodically } from "./m_mainSimulationForTakeoffsAndLandings.js";

fs.readFile("inputText.txt", "utf-8", (error, data) => {
  if (error) throw error;
  const inputdata = data.split("\n");
  // Here we are calling our initial methods
  convertingTextFileIntoTerminalCard(inputdata);
  insertingDatasIntoTheAllQueues();
  simulateLandingsAndTakeoffsPeriodically();
});
