const { Signup, Login, uploadTestimonial, getAllTestimonials } = require("../controllers/authController");
const LampUser = require("../models/Admin");
const { createSecretToken } = require("../utils/secretToken");
const router = require("express").Router();

router.post("/signup", (req, res, next) => {
    try {
      const { username, password } = req.body;
      const existingUser =  LampUser.findOne({ username });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const lampUser =  LampUser.create({ username, password });
      const token = createSecretToken(lampUser._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ 
              message: "User signed up successfully", 
              success: true, 
              lampUser 
              });
      next();
    } catch (error) {
      console.error(error);
    }
  });
router.post("/login", Login);
router.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = router;