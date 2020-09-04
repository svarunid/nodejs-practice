const http = require("http");

const express = require("express");

const app = express();

// Task 1
// app.use((req, res, next) => {
//   console.log("First Handler");
//   next();
// });

// Task 2
// app.use((req, res, next) => {
//   res.send("<h1>Welcome user!</h1>");
// });

// Task 3
app.use("/users", (req, res, next) => {
  res.send("<h1>Welcome user!</h1>");
});

// Task 4
app.use((req, res, next) => {
  res.send("<h1>Hello User!</h1>");
});

app.listen(3000);
