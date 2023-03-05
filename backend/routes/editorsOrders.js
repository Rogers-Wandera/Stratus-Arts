const express = require("express");
const USER_ROLES = require("../config/rolesList");
const { getEditorsOrder } = require("../controllers/orders/editorsOrders");
const verifyEmailAuth = require("../middlewares/verifyEmail");
const verifyJWT = require("../middlewares/verifyJWT");
const VerifyRoles = require("../middlewares/verifyRoles");

const router = express.Router();

router.route("/").get(verifyJWT,VerifyRoles(USER_ROLES.Editor),verifyEmailAuth,getEditorsOrder);

module.exports = router;