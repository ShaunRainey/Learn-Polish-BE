const { Pool } = require("pg");
const path = require("path");
const dns = require("dns");

// Force public DNS to avoid Render's broken internal DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const ENV = process.env.NODE_ENV || "development";


// Load dotenv only for dev or test
if (ENV !== "production") {
    require("dotenv").config({ path: path.resolve(__dirname, `../.env.${ENV}`) });
}

console.log(process.env.DATABASE_URL)
// Validate env config
if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("No PGDATABASE or DATABASE_URL configured");
}

const config = {};

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.ssl = { rejectUnauthorized: false }; // Required by Supabase
  config.max = 2;
} else {
  if (process.env.DATABASE_URL) {
    config.connectionString = process.env.DATABASE_URL;
  } else {
    config.database = process.env.PGDATABASE;
    config.user = process.env.PGUSER || undefined;
    config.password = process.env.PGPASSWORD || undefined;
    config.host = process.env.PGHOST || undefined;
    config.port = process.env.PGPORT || undefined;
  }
}

const db = new Pool(config);

module.exports = db;
