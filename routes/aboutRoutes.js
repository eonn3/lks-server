const { uploadAbout, editAbout } = require("../controllers/aboutController");
const router = require("express").Router();


router.post("/upload/about", uploadAbout);
router.put("/edit/about/:aboutId", editAbout)
router.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = router;