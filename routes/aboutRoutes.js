const { uploadAbout } = require("../controllers/aboutController");
const router = require("express").Router();


router.post("/upload/about", uploadAbout);
router.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = router;