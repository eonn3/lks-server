const Admin = require("../models/Admin");
require("dotenv").config();
const jwt = require ("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.json({
                    status: false,
                    message: "Unauthorized Access!"
                });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if(err){
            return res.json({ 
                status: false,
                error: err,
             });
        }else {
            const user = await Admin.findById(data.id)
            if (user) {
                req.username = user.username;
                req.id = user._id;
                next();
          }else{
            return res.json({status: false});
          }
        }
    })
}