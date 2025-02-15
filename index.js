const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");
const session = require("express-session");

// port
const port = 3000;
const secret = "Ulagay123";

// mideleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(secret));
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// define
app.get("/signingcookie", (req, res) => {
  res.cookie("user", "ulagay-123", { signed: true });
  res.send("cookie berhasil di set");
});

app.get("/verifycookie", (req, res) => {
  const cookie = req.signedCookies;
  res.send(cookie);
});

app.get("/count", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send(`count: ${req.session.count}`);
});

app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
