"use strict";

// We need to import reqired libraries.
const express = require("express");
const routerForBookStore = require("./routs/book_store");
const routerForWeather = require("./routs/weather");
const server = express();

// calling the routes
server.use(express.json());
server.use("/book_store", routerForBookStore);
server.use("/weather", routerForWeather);

// This route is simply give response (message) to client.
server.get("/", (request, response) => {
  response.send("My server is running, What do you want ?");
});

// My server is listening on the port number 2022.
server.listen(2022, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("The port is listening for your request");
  }
});
