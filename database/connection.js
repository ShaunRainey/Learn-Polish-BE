const { Pool } = require("pg");
const ENV = process.env.NODE_ENV || 'development';
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../ini.env") }); //Not 100% sure why this works/is needed, but without path.resolve it fails to locate the correct file


if (!process.env.PGDATABASE) {
        throw new Error("No PGDatabase configured")
}
    
const config = {};

if (ENV === 'production') {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}
    
const db = new Pool();
    
    // console.log(process.env.PGDATABASE)
module.exports = db;

console.log(process.env)