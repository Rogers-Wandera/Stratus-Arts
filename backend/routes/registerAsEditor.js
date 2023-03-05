const express = require("express");
const registerAsEditor = require("../controllers/registerAsEditor");

const router = express.Router();

router.route("/").post(registerAsEditor);

module.exports = router;