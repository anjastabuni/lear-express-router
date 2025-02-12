const express = require("express");

const app = express();

// port
const port = 3000;

// mideleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define routes
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
