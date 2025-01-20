"use strict";

// Required libraries
const csvToJson = require("csv-parser");
const express = require("express");
const fs = require("fs");
const route = express.Router();
const jsonFileForWeather = [];

// Read the data from the csv file and store it in the json format.
fs.createReadStream("weatherData.csv")
  .pipe(csvToJson({}))
  .on("data", (data) => jsonFileForWeather.push(data));

// This route is give response (jsonfile) to the client.
route.get("/", (request, response) => {
  response.json(jsonFileForWeather);
});

// This route is fetch the requested data(today weather)from the json file.
route.get("/today", (request, response) => {
  if (request.query.city) {
    let dateFormat = new Date();
    let cureentDateWithSlash = `${dateFormat.getDate()}/${
      dateFormat.getMonth() + 1
    }/${dateFormat.getFullYear()}`;
    let weatherOfToday = [];
    for (let element of jsonFileForWeather) {
      if (
        request.query.city.toLowerCase() == element.city.toLowerCase() &&
        element.date == cureentDateWithSlash
      ) {
        weatherOfToday.push(element);
      }
    }
    if (weatherOfToday.length == 0) {
      response.send("No records found");
    } else {
      response.send(weatherOfToday);
    }
  } else {
    response.send(422, "The given name is wrong, please give as a 'city'");
  }
});

// This route is add a new data into the json file and also add to the csv file.
route.post("/add", (request, response) => {
  if (
    request.body.city &&
    request.body.date &&
    request.body.temparature &&
    request.body.rain_fall &&
    request.body.humidity &&
    request.body.air_quality
  ) {
    const newCity = {
      city: request.body.city,
      date: request.body.date,
      temparature: request.body.temparature,
      rain_fall: request.body.rain_fall,
      humidity: request.body.humidity,
      air_quality: request.body.air_quality,
    };
    jsonFileForWeather.push(newCity);
    let newData = `${newCity.city},${newCity.date},${newCity.temparature},${newCity.rain_fall},${newCity.humidity},${newCity.air_quality}`;
    // Here add the new data into the csv file
    fs.appendFile("weatherData.csv", `\r\n${newData}`, (error) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("succesfully added into the file");
      }
    });
    response.status(201);
    response.send(newCity);
  } else {
    displayErrorMessageforAddingNewData(
      request.body.city,
      request.body.date,
      request.body.temparature,
      request.body.rain_fall,
      request.body.humidity,
      request.body.air_quality,
      response
    );
  }
});
// This function is support for above search route. Here its used for displaying what type of error occured
const displayErrorMessageforAddingNewData = function (
  city,
  date,
  temparature,
  rain_fall,
  humidity,
  air_quality,
  response
) {
  response.send(
    422,
    `${
      city ? "city given correctly" : "city not given, please give it as a city"
    }. ${
      date ? "date given correctly" : "date not given, please give it as a date"
    }. ${
      temparature
        ? "temparature given correctly"
        : "temparature not given, please give it as a temparature"
    }. ${
      rain_fall
        ? "rain_fall given correctly"
        : "rain_fall not given, please give it as a rain_fall"
    }. ${
      humidity
        ? "humidity given correctly"
        : "humidity not given, please give it as a humidity"
    }. ${
      air_quality
        ? "air_quality given correctly"
        : "air_quality not given, please give it as a air_quality"
    }.   (city:?,date:?,temparature:?,rain_fall:?,humidity:?,air_quality:?)`
  );
};

// This route is for give the response (searched city weather) to the user.
route.get("/search", (request, response, next) => {
  if (request.query.date) {
    let weatherOfGivenDate = [];
    if (request.query.date.length == 10) {
      manipulatingDate(request.query.date, weatherOfGivenDate);
      weatherOfGivenDate.length == 0
        ? response.send("No recordes found")
        : response.send(weatherOfGivenDate);
    } else {
      response.send(422, "Please give the date as a format of dd/mm/yyyy");
    }
  } else {
    request.query.pagenumber || request.query.pagesize
      ? next()
      : response.send(
          422,
          "Please given name is wrong, please give as a 'date' "
        );
  }
});
// This function is used to dividing requested date and json date into integer. Then check with both,push into the array
const manipulatingDate = function (date, dataSet) {
  for (let element of jsonFileForWeather) {
    let dateFromJsonWithoutDivision = `${element.date.slice(
      0,
      2
    )}${element.date.slice(3, 5)}${element.date.slice(6, 10)}`;
    let requestedDateWithoutDivision = `${date.slice(0, 2)}${date.slice(
      3,
      5
    )}${date.slice(6, 10)}`;
    if (requestedDateWithoutDivision == dateFromJsonWithoutDivision) {
      dataSet.push(element);
    }
  }
};

// This route is used to give pagenumber response as a pagination
route.get("/search", (request, response) => {
  if (
    request.query.pagenumber &&
    request.query.pagesize &&
    request.query.pagenumber > 0
  ) {
    const pageNumber = request.query.pagenumber;
    const pageLimit = request.query.pagesize;
    let pages = [];
    const startIndex = (pageNumber - 1) * pageLimit;
    const endIndex = pageNumber * pageLimit;
    jsonFileForWeather.forEach((element, index) => {
      if (index >= startIndex && index < endIndex) {
        pages.push(element);
      }
    });
    pages.length !== 0
      ? response.send(pages)
      : response.send(
          `There is no records for your choosen pagenumber ${request.query.pagenumber}  and pagesize ${request.query.pagesize}`
        );
  } else {
    response.send(
      `${
        request.query.pagenumber
          ? "pagenumber given correctly"
          : "pagenumber not given, please give it as a pagenumber"
      }. ${
        request.query.pagesize
          ? "pagesize given correctly"
          : "pagesize not given, please give it as a pagesize"
      }. ${
        request.query.pagenumber > 0
          ? "The pagenumber is possitive"
          : "The pagenumber should be possitive, please give a possitive pagenumbers"
      }`
    );
  }
});

// Finally exports the router object
module.exports = route;
