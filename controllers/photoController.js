const photos = require("../models/Photo");

module.exports.uploadPhoto = async (req, res) => {
    try{
        const { link } = req.body;
        const newPhoto = await photos.create({ link });
        res.status(201).json({ 
            message: "Photo uploaded successfully", 
            success: true,
            newPhoto,
            });
    }catch(error){
        return res.json({
                message: 'Error! [uploadPhoto]',
                error
            })
    }
}

module.exports.editPhoto = async (req, res) => {
    try{

        const photoId = req.params.photoId;

        const existingPhoto = await photos.findById(photoId);

        const updatedFields = {};

        if (req.body.link && req.body.link !== existingPhoto.link) {
            updatedFields.link = req.body.link;
        }

        if (Object.keys(updatedFields).length === 0) {
            return res.status(200).json({
                status: 'success',
                message: 'No changes detected. Product information remains unchanged.',
                existingPhoto,
            });
        }

        Object.assign(existingPhoto, updatedFields);


        await existingPhoto.save();

        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully',
            existingPhoto: existingPhoto,
        });

    }catch(error){
        return res.json({
                message: 'Error! [editPhoto]',
                error
            })
    }
}

module.exports.deletePhoto = async (req, res) => {
    try{

        const photoId = req.params.photoId;

        const deletedPhoto = await photos.findByIdAndDelete(photoId);

        if (!deletedPhoto) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Product deleted successfully',
        });

    }catch(error){
        return res.json({
                message: 'Error! [deletePhoto]',
                error
            })
    }
}

module.exports.getPhoto = async (req, res) => {
    try{
        const Photos = await photos.find();

        res.status(200).json({
            status: 'success',
            message: 'Photos fetched successfully',
            Photos,
        })

    }catch(error){
        return res.json({
                message: 'Error! [deletePhoto]',
                error
            })
    }
}