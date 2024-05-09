const { uploadAbout, editAbout, getAbout } = require("../controllers/aboutController");
const router = require("express").Router();
const verification = require("../controllers/verify")


router.post("/upload/about", uploadAbout);
router.put("/edit/about/:aboutId", editAbout);
router.get("/getAbout", getAbout);

module.exports = router;