"use strict";
let array = [];
let bufferString;
let obj = {};
const readCsvFilesAndCreateHtmlReport = function () {
  const fs = require("fs");
  fs.readFile("traindata.csv", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    array = data.toString().split("\n");
    console.log(array);
    console.log(typeof array);
    console.log(array[0]);
    const title = array.splice(array[0]);
    console.log(title);
    const orderdManner = array.sort();
    console.log(orderdManner);
    for (let ar of title) {
      console.log(ar);
    }
    const frow = array.splice(array[0], 1);
    // const individual =
    // console.log(individual);
  });
};
readCsvFilesAndCreateHtmlReport();
