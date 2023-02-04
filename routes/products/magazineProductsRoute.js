const express = require("express");
const USER_ROLES = require("../../config/rolesList");
const { 
    getAllMagazineProducts,
    addNewMagazineProduct,
    getSingleMagazineProduct,
    updateMagazineProduct,
    deleteSingleMagazineProduct,
    updateMagazineProductEditor,
    deleteSingleMagazineProductEditor,
    addMagazineComment,
    addMagazineRating,
    getMagazineComments,
    getMagazineRating
} = require("../../controllers/products/magazineProducts");
const verifyEmailAuth = require("../../middlewares/verifyEmail");
const verifyJWT = require("../../middlewares/verifyJWT");
const VerifyRoles = require("../../middlewares/verifyRoles");

const router = express.Router();

router.route("/").get(getAllMagazineProducts)
.post(verifyJWT,VerifyRoles(USER_ROLES.Admin,USER_ROLES.Editor),
verifyEmailAuth,addNewMagazineProduct)
router.route("/:productId").get(getSingleMagazineProduct)
router.route("/comments/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Admin,USER_ROLES.Editor),
addMagazineComment)
router.route("/ratings/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.user,USER_ROLES.Admin,USER_ROLES.Editor),
addMagazineRating)
router.route("/comments/:productId").get(getMagazineComments);
router.route("/ratings/:productId").get(getMagazineRating);

// Admin
router.route("/admin/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.Admin),
verifyEmailAuth,updateMagazineProduct).delete(verifyJWT,VerifyRoles(USER_ROLES.Admin),
verifyEmailAuth,deleteSingleMagazineProduct)

// Editor
router.route("/editor/:productId").patch(verifyJWT,VerifyRoles(USER_ROLES.Editor),verifyEmailAuth,
updateMagazineProductEditor).delete(verifyJWT,VerifyRoles(USER_ROLES.Editor)
,verifyEmailAuth,deleteSingleMagazineProductEditor)

module.exports = router;