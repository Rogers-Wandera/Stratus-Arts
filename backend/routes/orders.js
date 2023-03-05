const express = require("express");
const USER_ROLES = require("../config/rolesList");
const { getOrders, getOrdersAdmin, changeOrderStatusAdmin, getSingleOrder, deleteOrderAdmin, } = require("../controllers/orders/orders");
const verifyEmailAuth = require("../middlewares/verifyEmail");
const verifyJWT = require("../middlewares/verifyJWT");
const VerifyRoles = require("../middlewares/verifyRoles");

const router = express.Router();

router.route("/").get(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Editor,USER_ROLES.Admin),
verifyEmailAuth,getOrders)
router.route("/admin").get(verifyJWT,VerifyRoles(USER_ROLES.Admin),verifyEmailAuth,getOrdersAdmin)
router.route("/admin/status").patch(verifyJWT,VerifyRoles(USER_ROLES.Admin),verifyEmailAuth,
changeOrderStatusAdmin)
router.route("/:id").get(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Editor,USER_ROLES.Admin),
verifyEmailAuth,getSingleOrder);
router.route("/:id").delete(verifyJWT,VerifyRoles(USER_ROLES.Admin),verifyEmailAuth,deleteOrderAdmin);

module.exports = router;