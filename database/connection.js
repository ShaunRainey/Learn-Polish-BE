const { Pool } = require("pg");
const path = require("path");
const { execSync } = require("child_process");

const ENV = process.env.NODE_ENV || "development";

// Load dotenv only for dev or test, not in production on Render
if (ENV !== "production") {
  require("dotenv").config({ path: path.resolve(__dirname, `../.env.${ENV}`) });
}

// Check at least one connection env var exists
if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("No PGDATABASE or DATABASE_URL configured");
}

const config = {};

if (ENV === "production") {
  const dbUrl = new URL(process.env.DATABASE_URL);

  // Synchronously resolve IPv4 address from hostname
  let ipv4;
  try {
    const nslookup = execSync(`nslookup ${dbUrl.hostname}`).toString();
    const match = nslookup.match(/Address:\s+(\d+\.\d+\.\d+\.\d+)/);
    if (match) {
      ipv4 = match[1];
    } else {
      throw new Error("Could not resolve IPv4 address for DB host");
    }
  } catch (err) {
    console.error("DNS resolution failed:", err);
    throw err;
  }

  config.host = ipv4;
  config.port = dbUrl.port;
  config.user = dbUrl.username;
  config.password = dbUrl.password;
  config.database = dbUrl.pathname.slice(1); // remove leading slash
  config.ssl = { rejectUnauthorized: false };
  config.max = 2;
} else {
  if (process.env.DATABASE_URL) {
    config.connectionString = process.env.DATABASE_URL;
  } else if (process.env.PGDATABASE) {
    config.database = process.env.PGDATABASE;
    config.user = process.env.PGUSER || undefined;
    config.password = process.env.PGPASSWORD || undefined;
    config.host = process.env.PGHOST || undefined;
    config.port = process.env.PGPORT || undefined;
  }
}

const db = new Pool(config);

module.exports = db;
