var express = require("express");
var router = express.Router();
const favMovies = ["Godfather", "Avatar", "Scarface"];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/myname", (req, res) => {
  res.send("Steven");
});

router.get("/myfavoritemovies", (req, res) => {
  res.json(favMovies);
});

module.exports = router;
