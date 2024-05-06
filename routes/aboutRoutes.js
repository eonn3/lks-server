const { uploadAbout, editAbout, getAbout } = require("../controllers/aboutController");
const router = require("express").Router();
const verification = require("../controllers/verify")


router.post("/upload/about", [verification.userVerification], uploadAbout);
router.put("/edit/about/:aboutId", [verification.userVerification], editAbout);
router.get("/getAbout", getAbout);

module.exports = router;