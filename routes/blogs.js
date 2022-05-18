const express = require("express");
const router = express.Router();
const blogPostArr = require("../blogPosts");

router.get("/all", (req, res) => {
  let descending = req.query.desc;
  let ascending = req.query.asc;

  if (descending === "desc") {
    res.send(
      (req.query.desc = blogPostArr.blogPosts.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }))
    );
  } else if (ascending === "asc") {
    res.send(
      (req.query.asc = blogPostArr.blogPosts.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }))
    );
  } else {
    res.json(blogPostArr);
  }
});

router.get("/:id", (req, res) => {
  let blogId = blogPostArr.blogPosts[req.params.id];
  res.send(blogId);
});

module.exports = router;
