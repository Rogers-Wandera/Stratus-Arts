const express = require("express");
const uploadProfilePicture = require("../controllers/uploadProfile");

const router = express.Router();

router.route("/").post(uploadProfilePicture);

module.exports = router;