var express = require("express");
var router = express.Router();
const registerInitialChecks = require("../middlewares/registerChecks");
const register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", registerInitialChecks, register);

module.exports = router;
