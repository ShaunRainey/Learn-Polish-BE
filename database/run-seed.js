const seed = require("./seed");
const db = require("./connection");

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('PGDATABASE:', process.env.PGDATABASE);


seed()
  .then(() => {
    console.log("✅ Seeding complete");
    return db.end(); // CALL the function
  })
  .then(() => {
    console.log("📦 Connection closed");
    process.exit(0); // Exit cleanly
  })
  .catch((err) => {
    console.error("❌ Seeding error:", err);
    process.exit(1); // Exit with error code
  });