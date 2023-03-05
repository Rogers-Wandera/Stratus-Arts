const express = require("express");
const USER_ROLES = require("../../config/rolesList");
const flutterWavePayment = require("../../controllers/payments/flutterWave");
const verifyEmailAuth = require("../../middlewares/verifyEmail");
const verifyJWT = require("../../middlewares/verifyJWT");
const VerifyRoles = require("../../middlewares/verifyRoles");

const router = express.Router();

router.route("/").post(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Admin,USER_ROLES.Editor),
verifyEmailAuth,flutterWavePayment)

module.exports = router;