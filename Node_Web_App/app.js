"use strict";

const http = require("http");

const port = 3030;

const server = http.createServer((req, res) => {});

server.listen(port, (error) => {
  if (error) {
    console.log("Spmething went wrong");
  } else {
    console.log("Succesfully the port is listening");
  }
});
