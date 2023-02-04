const express = require("express");
const USER_ROLES = require("../../config/rolesList");
const { 
    getAllProducts, 
    addNewArtProduct,
    getSingleArtProduct, 
    deleteSingleProduct, 
    updateProduct, 
    updateProductEditor,
    deleteSingleProductEditor,
    getAllProductsEditor,
    addCommentArt,
    addRating,
    getProductComments,
    getProductRating
} = require("../../controllers/products/artPictureProduct");
const verifyEmailAuth = require("../../middlewares/verifyEmail");
const verifyJWT = require("../../middlewares/verifyJWT");
const VerifyRoles = require("../../middlewares/verifyRoles");

const router = express.Router();

router.route("/").get(getAllProducts)
.post(verifyJWT,VerifyRoles(USER_ROLES.Admin,USER_ROLES.Editor)
,verifyEmailAuth,addNewArtProduct)
router.route("/:productId").get(getSingleArtProduct)
router.route("/comments/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Admin,USER_ROLES.Editor),
addCommentArt)
router.route("/ratings/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Admin,USER_ROLES.Editor),
addRating)
router.route("/comments/:productId").get(getProductComments);
router.route("/ratings/:productId").get(getProductRating);

// Admin
router.route("/admin/:productId").delete(verifyJWT,VerifyRoles(USER_ROLES.Admin)
,verifyEmailAuth,deleteSingleProduct).patch(verifyJWT,VerifyRoles(USER_ROLES.Admin),
verifyEmailAuth,updateProduct)

// Editor
router.route("/editor/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.Editor),verifyEmailAuth,
updateProductEditor).delete(verifyJWT,VerifyRoles(USER_ROLES.Editor)
,verifyEmailAuth,deleteSingleProductEditor)
router.route("/editor/products").get(verifyJWT,VerifyRoles(USER_ROLES.Editor),
verifyEmailAuth,getAllProductsEditor);

module.exports = router;