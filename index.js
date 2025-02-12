const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

// port
const port = 3000;

// mideleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// define routes
app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
