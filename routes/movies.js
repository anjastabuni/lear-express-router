const express = require("express");
const router = express.Router();

// routes
router.get("/", (req, res) => {
  const { user = "No-name", token = "" } = req.cookies;
  res.send(`Hallo  ${user} token anda adalah ${token}`);
});

router.get("/create", (req, res) => {
  res.send("movie create");
});
router.post("/", (req, res) => {
  res.send("movie store");
});

router.get("/:id", (req, res) => {
  res.send("movie show");
});

router.put("/:id", (req, res) => {
  res.send("movie update");
});

router.delete("/:id", (req, res) => {
  res.send("movie delete");
});

module.exports = router;
