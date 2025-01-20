"use strict";

// Here is our required libraries
const express = require("express");
const fs = require("fs");
const csvToJson = require("csv-parser");
const jsonFileForBookStore = [];
const router = express.Router();

// Here I have read the data from csv and store it in the array, in the format of json
fs.createReadStream("bookStoreData.csv")
  .pipe(csvToJson({}))
  .on("data", (data) => jsonFileForBookStore.push(data));

//  This route is just give the response (Jsonfile) to the client.
router.get("/", (request, response) => {
  response.send(jsonFileForBookStore);
});

// This route is used to search the requested data from the json file and give response to the client.
router.get("/search", (request, response, next) => {
  if (request.query.author && request.query.publishing_year) {
    let booksOfSearchedAuthor = [];
    for (let element of jsonFileForBookStore) {
      if (
        request.query.author.toLowerCase() == element.author.toLowerCase() &&
        request.query.publishing_year == element.publishing_year
      ) {
        booksOfSearchedAuthor.push(element);
      }
    }
    booksOfSearchedAuthor.length == 0
      ? response.send("No records found")
      : response.send(booksOfSearchedAuthor);
  } else {
    if (request.query.author || request.query.publishing_year) {
      displayErrorMessageforFindingBooks(
        request.query.author,
        request.query.publishing_year,
        response
      );
    } else {
      // Here calling next search route
      next();
    }
  }
});
// This function is support for above search route. Here its used for displaying what type of error occured
const displayErrorMessageforFindingBooks = function (
  queryData1,
  queryData2,
  response
) {
  response.send(
    422,
    `${
      queryData1
        ? "author given correctly"
        : "author not given, please give it as a author"
    }. ${
      queryData2
        ? "publishing_year given correctly"
        : "publishing_year not given, please give it as a publishing_year"
    }`
  );
};

// This route is used to take a request and add into the json file and also csv file.
router.post("/add", (request, response) => {
  if (
    request.body.book_name &&
    request.body.author &&
    request.body.publishing_year
  ) {
    const newBook = {
      book_name: request.body.book_name,
      author: request.body.author,
      publishing_year: request.body.publishing_year,
    };
    jsonFileForBookStore.push(newBook);
    let newData = `${newBook.book_name},${newBook.author},${newBook.publishing_year}`;
    // Here added the request data into the csv file.
    fs.appendFile("bookStoreData.csv", `\r\n${newData}`, (error) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("Succesfully added into the File");
      }
    });
    response.status(201);
    response.send(newBook);
  } else {
    response.send(
      422,
      `${
        request.body.book_name
          ? "book_name given correctly"
          : "book_name not given, please give it as a book_name"
      }. ${
        request.body.author
          ? "author given correctly"
          : "author not given, please give it as a author"
      }. ${
        request.body.publishing_year
          ? "publishing_year given correctly"
          : "publishing_year not given, please give it as a publishing_year"
      }  (book_name:?,author:?,publishing_year:?)`
    );
  }
});
// This route is used to give page response as a pagination
router.get("/search", (request, response) => {
  if (
    request.query.pagenumber &&
    request.query.pagesize &&
    request.query.pagenumber >= 0
  ) {
    const pageNumber = request.query.pagenumber;
    const pageLimit = request.query.pagesize;
    let pages = [];
    const startIndex = (pageNumber - 1) * pageLimit;
    const endIndex = pageNumber * pageLimit;
    jsonFileForBookStore.forEach((element, index) => {
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

// Finally export the router object.
module.exports = router;
