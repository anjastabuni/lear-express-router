const express = require("express");
const router = express.Router();

// routes
router.get("/", (req, res) => {
  const { user = "No-name", token = "" } = req.cookies;
  res.send(`Hallo  ${user} token anda adalah ${token}`);
});

router.get("/create", (req, res) => {
  res.send("theater create");
});
router.post("/", (req, res) => {
  res.send("thater store");
});

router.get("/:id", (req, res) => {
  res.send("Theater show");
});

router.put("/:id", (req, res) => {
  res.send("theater update");
});

router.delete("/:id", (req, res) => {
  res.send("theater delete");
});

module.exports = router;
