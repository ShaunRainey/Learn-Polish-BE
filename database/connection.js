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
  const { URL } = require("url");
  const dbUrl = new URL(process.env.DATABASE_URL);

  config.host = dbUrl.hostname;
  config.port = dbUrl.port || 5432;
  config.user = dbUrl.username;
  config.password = dbUrl.password;
  config.database = dbUrl.pathname.slice(1); // remove leading slash
  config.ssl = { rejectUnauthorized: false };
  config.max = 2;
} else {
  // existing dev config...
}

const db = new Pool(config);

module.exports = db;
