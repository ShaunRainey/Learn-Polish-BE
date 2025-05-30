const { Pool } = require("pg");
const path = require("path");
const ENV = process.env.NODE_ENV || 'development';

const envPath = path.resolve(__dirname, `../.env.${ENV}`);
console.log(`Loading environment variables from: ${envPath}`);

const dotenvResult = require("dotenv").config({ path: envPath });

if (dotenvResult.error) {
  console.warn(`Warning: Could not load ${envPath}, trying fallback .env`);
  require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
}

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PGDATABASE:', process.env.PGDATABASE);
console.log('DATABASE_URL:', process.env.DATABASE_URL);

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("No PGDATABASE or DATABASE_URL configured");
}

const config = {};

if (ENV === 'production') {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2; // optional: limit connection pool size for Supabase
}

const db = new Pool(config);

module.exports = db;
