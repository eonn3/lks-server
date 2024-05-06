const router = require("express").Router();
const { uploadPhoto, editPhoto, deletePhoto, getPhoto } = require("../controllers/photoController");
const verification = require("../controllers/verify")

router.post("/upload/photo", [verification.userVerification], uploadPhoto);
router.put("/edit/photo/:photoId", [verification.userVerification], editPhoto);
router.delete("/delete/photo/:photoId", [verification.userVerification], deletePhoto);
router.get("get/photo", getPhoto);

module.exports = router;