const { Pool } = require("pg");
const path = require("path");

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

// In production use DATABASE_URL and enforce SSL
if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;

  // Enable SSL for Supabase connection
  config.ssl = {
    rejectUnauthorized: false, // Allow self-signed certs, common with Supabase
  };

  config.max = 2; // Connection pool max size in production
} else {
  // For development fallback, use PGDATABASE with default config (adjust if needed)
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


