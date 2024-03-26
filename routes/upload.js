const express = require("express");
const router = express.Router();

const {
  postDetails,
  postList,
  validator,
} = require("../controllers/uploadController");

router.post("/", validator, postDetails, postList);

module.exports = router;
