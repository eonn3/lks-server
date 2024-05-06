const about = require('../models/About');

module.exports.uploadAbout = async (req, res, next) => {
    try{
        const { schoolDescription, phoneNumber, email, address, facebook} = req.body;

        const aboutTo = await about.create({ schoolDescription, phoneNumber, email, address, facebook });
        res
      .status(201)
      .json({ 
            message: "User signed up successfully", 
            success: true, 
            aboutTo 
            });
    next();
    }catch(error){
        return res.json({
                message: 'Error! [uploadAbout]',
                error
            })
    }
};