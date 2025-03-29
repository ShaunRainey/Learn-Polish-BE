const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../ini.env") }); //Not 100% sure why this works/is needed, but without path.resolve it fails

const { Pool } = require("pg");

if (!process.env.PGDATABASE) {
        throw new Error("No PGDatabase configured")
    }
    
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
