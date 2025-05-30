// const seed = require("./seed");
// const db = require("./connection");

// seed()
//   .then(() => {
//     console.log("✅ Seeding complete");
//     return db.end(); // CALL the function
//   })
//   .then(() => {
//     console.log("📦 Connection closed");
//     process.exit(0); // Exit cleanly
//   })
//   .catch((err) => {
//     console.error("❌ Seeding error:", err);
//     process.exit(1); // Exit with error code
//   });