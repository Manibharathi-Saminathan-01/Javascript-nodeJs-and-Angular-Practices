const csvtoJson = require("csvtojson");
const fileSystem = require("fs");

csvtoJson()
  .fromFile("./trainData.csv")
  .then((train) => {
    console.log(train);
  });
