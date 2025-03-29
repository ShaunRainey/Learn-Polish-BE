const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../ini.env") });

// const dotenvResult = require("dotenv").config();
// if (dotenvResult.error) {
//   throw new Error("Failed to load .env file");
// }

// console.log("Environment Variables Loaded:", process.env);



const { Pool } = require("pg");

if (process.env.error) {
  console.error("Error loading .env file:", process.env.error);
} else {
  console.log("Environment variables loaded successfully:", process.env);
}

// if (!process.env.PGDATABASE) {
    //     throw new Error("No PGDatabase configured")
    // }
    
    const db = new Pool({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: 'polish-data-entry',
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    });
    
    // console.log(db);
    
    // console.log(process.env.PGDATABASE)
module.exports = db;
