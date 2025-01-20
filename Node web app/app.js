"use strict";
const url = require("url");
const http = require("http");
const exactUrl = "http://localhost:3030/user?name=vicky";

const urlObject = url.parse(exactUrl, true);

console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.pathname == "/user");
console.log(urlObject.query.name);

const port = 3030;
const port1 = 4000;

const serverForCalculation = http
  .createServer((req, res) => {
    const addition = function (a, b) {
      let result;
      res.write(a, "+", b);
      result = a + b;
    };
    res.write(addition(2, 2));
    res.end();
  })
  .listen(port);

const server1 = http
  .createServer((req, res) => {
    res.write("This is run on port 4000");
    console.log(req);
    res.end();
  })
  .listen(port1);
// server.listen(port, (error) => {
//   if (error) {
//     console.log("Spmething went wrong", error);
//   } else {
//     console.log("Succesfully the port is listening" + port);
//   }
// });

// For single port

const portForPrintingParagraph = 9000;
const portForShowImage = 9001;
const portForUppercaseConversion = 9002;

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    fs.readFile("app1.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(portForPrintingParagraph);

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    fs.readFile("app2.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(portForShowImage);

http
  .createServer((req, res) => {
    const requestedUrl = url.parse(req.url, true);
    const upperCase = requestedUrl.query.name;
    console.log(upperCase);
    const result = upperCase.toUpperCase();
    console.log(result);
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(result);
    res.end();
    res.writeHead(200, { "content-Type": "text/html" });
    fs.readFile(getable, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(portForUppercaseConversion);
