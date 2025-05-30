const seed = require("./seed");
const db = require("./connection");

seed()
  .then(() => {
    console.log("✅ Seeding complete");
    return db.end();
  });