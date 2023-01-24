const express = require("express");
const USER_ROLES = require("../../config/rolesList");
const { 
    getAllProducts, 
    addNewArtProduct,
    getSingleArtProduct, 
    deleteSingleProduct, 
    updateProduct 
} = require("../../controllers/products/artPictureProduct");
const verifyEmailAuth = require("../../middlewares/verifyEmail");
const verifyJWT = require("../../middlewares/verifyJWT");
const VerifyRoles = require("../../middlewares/verifyRoles");

const router = express.Router();

router.route("/").get(getAllProducts)
.post(verifyJWT,VerifyRoles(USER_ROLES.Admin,USER_ROLES.Editor)
,verifyEmailAuth,addNewArtProduct)
router.route("/:productId").get(getSingleArtProduct)
.delete(deleteSingleProduct)
.patch(verifyJWT,VerifyRoles(USER_ROLES.Admin),verifyEmailAuth,updateProduct)

module.exports = router;