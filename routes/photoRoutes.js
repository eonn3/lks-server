const router = require("express").Router();
const { uploadPhoto, editPhoto, deletePhoto, getPhoto } = require("../controllers/photoController");

router.post("/upload/photo", uploadPhoto);
router.put("/edit/photo/:photoId", editPhoto);
router.delete("/delete/photo/:photoId", deletePhoto);
router.get("/get/photo", getPhoto);

module.exports = router;