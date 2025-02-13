const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

// port
const port = 3000;

// mideleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("Ulagay123"));

// define
app.get("/signingcookie", (req, res) => {
  res.cookie("user", "ulagay-123", { signed: true });
  res.send("cookie berhasil di set");
});

app.get("/verifycookie", (req, res) => {
  const cookie = req.signedCookies;
  res.send(cookie);
});

app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
