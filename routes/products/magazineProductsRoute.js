const express = require("express");
const USER_ROLES = require("../../config/rolesList");
const { 
    getAllMagazineProducts,
    addNewMagazineProduct,
    getSingleMagazineProduct,
    updateMagazineProduct,
    deleteSingleMagazineProduct
} = require("../../controllers/products/magazineProducts");
const verifyEmailAuth = require("../../middlewares/verifyEmail");
const verifyJWT = require("../../middlewares/verifyJWT");
const VerifyRoles = require("../../middlewares/verifyRoles");

const router = express.Router();

router.route("/").get(getAllMagazineProducts)
.post(verifyJWT,VerifyRoles(USER_ROLES.Admin,USER_ROLES.Editor),
verifyEmailAuth,addNewMagazineProduct)
router.route("/:productId").get(getSingleMagazineProduct)
.patch(verifyJWT,VerifyRoles(USER_ROLES.Admin,USER_ROLES.Editor),
verifyEmailAuth,updateMagazineProduct)
.delete(verifyJWT,VerifyRoles(USER_ROLES.Admin,USER_ROLES.Editor),
verifyEmailAuth,deleteSingleMagazineProduct)

module.exports = router;