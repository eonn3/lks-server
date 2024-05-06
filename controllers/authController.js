const LampUser = require("../models/Admin");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcryptjs");


// To signup, use postman 
module.exports.Signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existingUser = await LampUser.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const lampUser = await LampUser.create({ username, password });
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
};


module.exports.Login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.json({ message: "All fields are required" });
      }
  
      const lampUser = await LampUser.findOne({ username });
  
      if (!lampUser) {
        return res.json({ message: "Incorrect password or username" });
      }
  
      const auth = await bcrypt.compare(password, lampUser.password);
      if (!auth) {
        return res.json({ message: "Incorrect password or username" });
      }
  
      const token = createSecretToken(lampUser._id);
  
      res.status(200).json({
        success: true,
        token,
        message: "Logged in successfully!",
        LampUser: {
          _id: lampUser._id,
          username: lampUser.username,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
