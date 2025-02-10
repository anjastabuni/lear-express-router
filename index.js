const express = require("express");

const app = express();

// port
const port = 3000;

// mideleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/theater", (req, res) => {
  res.send("Hello World");
});

app.get("/theater/create", (req, res) => {
  res.send("Create Theater");
});
app.post("/theater/create", (req, res) => {
  res.send("Create Theater");
});

app.get("/theater/:id", (req, res) => {
  res.send("Get Theater show");
});

app.get("/theater/:id", (req, res) => {
  res.send("theater kolorak Theater update");
});

app.delete("/theater/:id", (req, res) => {
  res.send("Update Theater show");
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
