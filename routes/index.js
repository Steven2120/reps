var express = require("express");
const res = require("express/lib/response");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get("/datetime", (req, res) => {
//   res.send(Date());
// });

module.exports = router;
