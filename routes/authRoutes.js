const { Signup, Login, uploadTestimonial, getAllTestimonials } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = router;