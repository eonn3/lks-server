const about = require('../models/About');

module.exports.uploadAbout = async (req, res) => {
    try{
        const { schoolDescription, phoneNumber, email, address, facebook} = req.body;

        const aboutTo = await about.create({ schoolDescription, phoneNumber, email, address, facebook });
        res.status(201).json({ 
            message: "About uploaded successfully", 
            success: true,
            aboutTo,
            });
    }catch(error){
        return res.json({
                message: 'Error! [uploadAbout]',
                error
            })
    }
};

module.exports.editAbout = async (req, res) => {
    try{

        const aboutId = req.params.aboutId;

        const existingAbout = await about.findById(aboutId);

        const updatedFields = {};

        if (req.body.schoolDescription && req.body.schoolDescription !== existingAbout.schoolDescription) {
            updatedFields.schoolDescription = req.body.schoolDescription;
        }
        if (req.body.phoneNumber && req.body.phoneNumber !== existingAbout.phoneNumber) {
            updatedFields.phoneNumber = req.body.phoneNumber;
        }
        if (req.body.email && req.body.email !== existingAbout.email) {
            updatedFields.email = req.body.email;
        }
        if (req.body.address && req.body.address !== existingAbout.address) {
            updatedFields.address = req.body.address;
        }
        if (req.body.facebook && req.body.facebook !== existingAbout.facebook) {
            updatedFields.facebook = req.body.facebook;
        }

        if (Object.keys(updatedFields).length === 0) {
            return res.status(200).json({
                status: 'success',
                message: 'No changes detected. Product information remains unchanged.',
                existingAbout,
            });
        }

        Object.assign(existingAbout, updatedFields);


        await existingAbout.save();

        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully',
            updatedAbout: existingAbout,
        });


    }catch(error){
        return res.json({
                message: 'Error! [uploadAbout]',
                error
            })
    }
};

module.exports.getAbout = async (req, res, next) => {
    try{
        const About = await about.find();

        res.status(200).json({
            status: 'success',
            message: 'About fetched successfully',
            About,
        })
    }catch(error){
        console.error(error);
    }
}