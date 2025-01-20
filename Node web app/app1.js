"use strict";

const http = require("http");
 const port = 3031;
 const port1 = 

const server = http.createServer((req, res) => {
  res.write("Hello Browser,we are from 3031");
  console.log(req);
  res.end();
});

 server.listen(port, (error) => {
  if (error) {
    console.log("Spmething went wrong", error);
  } else {
    console.log("Succesfully the port is listening" + port);
  }
});
