const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("you are not admin");
});

// routes
router.get("/", (req, res) => {
  res.send("administrator index");
});

module.exports = router;
