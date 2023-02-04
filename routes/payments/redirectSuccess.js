const express = require("express");
const USER_ROLES = require("../../config/rolesList");
const redirectUser = require("../../controllers/payments/redirect");
const verifyEmailAuth = require("../../middlewares/verifyEmail");
const verifyJWT = require("../../middlewares/verifyJWT");
const VerifyRoles = require("../../middlewares/verifyRoles");

const router = express.Router();

// verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Admin,USER_ROLES.Editor),
// verifyEmailAuth,

router.route("/").get(redirectUser)

module.exports = router;