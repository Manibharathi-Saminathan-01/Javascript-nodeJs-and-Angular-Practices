"use static";
const csvtoJson = require("csvtojson");
const fileSystem = require("fs");
let cityName = new Set();
let count = 1;
let list = [];
// let placeHolder = document.getElementById("#data");
// let out = "<table border='2px'>";
csvtoJson()
  .fromFile("./trainData.csv")
  .then((train) => {
    //  Sorting the dataSet
    const sorted = train.sort(function (a, b) {
      if (a.source < b.source) return -1;
    });
    console.log(sorted);

    // divinding the redundent values
    for (let index of train) {
      cityName.add(index.source);
    }
    const myArr = Array.from(cityName);
    console.log(myArr);
    console.table(sorted);
    // console.log(cityName);
    // train.forEach(function (unique) {
    //   if (unique.source == "Bangalore") {
    //     console.log(unique.source);
    //     console.log(unique);
    //   }
    // });
    // for (let i = 0; i < sorted.length; i++) {
    //   for (let j = 0; j < myArr.length; j++) {
    //     if (i.contains() == myArr[j]) {
    //       console.log(sorted.source[i]);
    //     }
    //   }
    // }

    // train
    //   .map((element) => element.source)
    //   .filter((element, index, arr) => {
    //     console.log(element);
    //   });
    // console.log(myArr.includes("Chennai"));

    let sourceValues = train.map((element) => element.source);
    // console.log(sourceValues);
    let indexValue = 0;
    for (let i = 0; i < myArr.length; i++) {
      console.log(myArr[i]);
      // console.table(ans);

      for (let j = i; j < sorted.length; j++) {
        if (myArr[i] == sorted[j].source) {
          // out += `
          //   <tr>
          //     <td>${sorted[j].destination}</td>
          //     <td>${sorted[j].train_no}</td>
          //     <td>${sorted[j].train_name}</td>
          //     <td>${sorted[j].departure_time}</td>
          //     <td>${sorted[j].distance}</td>
          //     <td>${sorted[j].frequency}</td>
          //   </tr>`;

          // console.log(myArr[i]);
          console.log(sorted[j]);

          // console.table(ans);

          // oooo.push(sorted[j]);
          // console.log(sorted[j].source);
          // count++;
          // console.log(count);
          console.log(i, j);
        } else continue;
      }
      // console.table(ans);
      // break;
    }
    console.log(list);
    // document.getElementById("data").innerHTML = html;
    // console.log(oooo);

    //   console.log(indexValue);
    //   let indexOffirst = 0;
    //   while (indexOffirst < sourceValues.length) {
    //     for (let j = indexOffirst; j < sourceValues.length; j++) {
    //       if (sourceValues[indexOffirst] == sourceValues[j]) {
    //         console.log(sorted[indexOffirst]);
    //         console.log(indexOffirst, j);
    //         // indexOffirst++;
    //       }
    //     }
    //     indexOffirst++;
    //   }
    // sorted.forEach((item) => {
    // const result = sourceValues.group(({ source }) => source);
    // console.log(result);
    // // });
    // placeHolder.innerHTML = out;
  });
