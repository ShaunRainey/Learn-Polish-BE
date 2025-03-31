const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const workbook = xlsx.readFile("./database/PolishAppDataEntry.ods");

// console.log(workbook.SheetNames);
// console.log(workbook.Sheets)

function getSheetData(sheetName){ 
    const sheet = workbook.Sheets[sheetName];  // this will access a specific sheet (tab in the spreadsheet)
    return xlsx.utils.sheet_to_json(sheet); // returns an array containing objects, each object is a row of the sheet
}

const sheets = workbook.SheetNames;

sheets.forEach((sheet) => {
    const data = getSheetData(sheet);
    fs.writeFileSync(`database/data/${sheet}.json`, JSON.stringify(data, null, 2),'utf8');
})
