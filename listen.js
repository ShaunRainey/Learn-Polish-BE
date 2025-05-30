const app = require('./app.js');
const { PORT = 9090 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

setInterval(() => {
  const used = process.memoryUsage();
  console.log('Memory usage:');
  for (let key in used) {
    console.log(`${key} ${(used[key] / 1024 / 1024).toFixed(2)} MB`);
  }
}, 10000); // logs every 10 seconds