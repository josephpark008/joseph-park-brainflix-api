const express = require("express");
const router = express.Router();

const { getDetails, getList } = require("../controllers/VideoControllers");
const { postVideo } = require("../controllers/uploadController");

router.get("/", getList);
router.get("/:id", getDetails);
router.post('/',postVideo);

module.exports = router;
