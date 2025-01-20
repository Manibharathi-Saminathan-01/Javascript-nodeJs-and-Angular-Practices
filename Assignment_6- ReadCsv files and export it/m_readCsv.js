"use strict";
async function getData() {
  const responce = await fetch("trainData.csv");

  const rawData = await responce.text();

  // separating the data and create header
  let arrayData = rawData.split("\r\n");
  let header = arrayData[0].split(",");

  let noOfRows = arrayData.length;
  let noOfColom = header.length;
  let jsonData = [];
  let cityName = new Set();

  // change that datas into array of objects
  let i = 0;
  let j = 0;
  for (i = 1; i < noOfRows - 1; i++) {
    let emptyObject = {};
    let newLine = arrayData[i].split(",");
    for (let j = 0; j < noOfColom; j++) {
      emptyObject[header[j]] = newLine[j];
    }
    jsonData.push(emptyObject);
  }

  // Sorting the json datas by using departure time after that source name
  jsonData
    .sort((a, b) => {
      if (a.departure_time < b.departure_time) return -1;
    })
    .sort(function (a, b) {
      if (a.source < b.source) return -1;
    });

  // fill the set from Json source
  for (let index of jsonData) {
    cityName.add(index.source);
  }
  // After creating set, convert into array
  const distintSourceValue = Array.from(cityName);

  let htmlElement = "";

  for (let i = 0; i < distintSourceValue.length; i++) {
    let numberForSno = 1;
    htmlElement += `<thead><tr><b>Source:${distintSourceValue[i]}</b></tr></thead>`;
    // This tags for create the table header
    htmlElement += `<thead>
    <tr>
      <th>sno</th>
      <th>source</th>
      <th>Destination</th>
      <th>train no</th>
      <th>train name</th>
      <th>departure_time</th>
      <th>distance</th>
      <th>frequency</th>
    </tr>
  </thead>`;
    //  This for is used for compare the adjacent value for same source value
    for (let j = i; j < jsonData.length; j++) {
      if (distintSourceValue[i] == jsonData[j].source) {
        //  This tags is used for create table data
        htmlElement += `<tbody>
             <tr>
               <td>${numberForSno}
               <td>${jsonData[j].source}</td>
               <td>${jsonData[j].destination}</td>
               <td>${jsonData[j].train_no}</td>
               <td>${jsonData[j].train_name}</td>
               <td>${jsonData[j].departure_time}</td>
               <td>${jsonData[j].distance}</td>
               <td>${jsonData[j].frequency}</td>
            </tr></tbody>`;
        numberForSno++;
      } else continue;
    }
  }
  document.getElementById("division").innerHTML = htmlElement;
}
getData();
