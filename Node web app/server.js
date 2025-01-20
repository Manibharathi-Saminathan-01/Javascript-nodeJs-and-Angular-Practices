"use strict";

const http = require("http");
const url = require("url");

const portForMyApplication = 1000;

// Make my server to listen
http
  .createServer((request, response) => {
    // This is requested url comeing from user
    const requestedUrl = url.parse(request.url, true);
    // If the url have the pathname app1 then
    if (requestedUrl.pathname == "/app1") {
      const userName = requestedUrl.query.name;
      const userWeight = requestedUrl.query.weight;
      const userHeight = requestedUrl.query.height;
      const bodyMassIndexOfUser = String(
        userWeight / (userHeight * userHeight)
      );
      response.writeHead(200, { "content-Type": "text/html" });
      response.write(`The BMI of the ${userName} is ${bodyMassIndexOfUser}`);
      response.end();
      // If the url have the pathname app2 then
    } else if (requestedUrl.pathname == "/app2") {
      const inputNumber = requestedUrl.query.number;
      if (inputNumber % 2 == 0) {
        response.writeHead(200, { "content-Type": "text/html" });
        response.write(`The number ${inputNumber} is Even`);
      } else {
        response.writeHead(200, { "content-Type": "text/html" });
        response.write(`The number ${inputNumber} is Odd`);
      }
      response.end();
      // If the url have the pathname app3 then
    } else if (requestedUrl.pathname == "/app3") {
      const upperCase = requestedUrl.query.name;
      const result = upperCase.toUpperCase();
      response.writeHead(200, { "content-Type": "text/html" });
      response.write(result);
      response.end();
    } else {
      response.writeHead(404, { "content-Type": "text/html" });
      response.write("File not found");
      response.end();
    }
  })
  .listen(portForMyApplication);
