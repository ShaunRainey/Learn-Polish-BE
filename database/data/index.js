// const xlsx = require("xlsx");
// const fs = require("fs");
// const path = require("path");

// const workbook = xlsx.readFile("./database/PolishAppDataEntry.ods"); // creates a connection to the ods sheet saved in database folder

// const sheetNames = workbook.SheetNames; // extracts names of each tab from the spreadsheet data

// const sheetData = {};

// sheetNames.forEach((sheet) => { sheetData[sheet] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]) });
// // adds an entry into sheetData where the key is the sheet name and the value is the data contained within that sheet

// const extractedData = Object.entries(sheetData).reduce((acc, [key, value]) => {
//   acc[`${key}Data`] = value;
//   return acc;
// }, {});

// // Object.entries effectively turns an object into an array, using key, value pairs. In this case, an array of arrays
// // You can also turn an array of this form into an object using Object.fromEntries(array)


// // iterate through each key of sheetData and create a variable using the key name, assigning this variable the value of the keys data

// module.exports = {
//   ...extractedData,
// };