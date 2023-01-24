const express = require("express");
const verifyEmailController = require("../controllers/verifyEmail");

const router = express.Router();

router.route("/verify/:id/:token").get(verifyEmailController);

module.exports = router;