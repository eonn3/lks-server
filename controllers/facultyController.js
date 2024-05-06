const Faculty = require("../models/Faculty");

module.exports.uploadFaculty = async (req, res) => {
    try{
        const { name, title, image} = req.body;

        const facultyTo = await Faculty.create({ name, title, image});
        res.status(201).json({ 
            message: "Faculty uploaded successfully", 
            success: true,
            facultyTo,
            });
    }catch(error){
        return res.json({
                message: 'Error! [uploadFaculty]',
                error
            })
    }
}

module.exports.editFaculty = async (req, res) => {
    try{

        const facultyId = req.params.facultyId;

        const existingFaculty = await about.findById(facultyId);

        const updatedFields = {};

        if (req.body.name && req.body.name !== existingFaculty.name) {
            updatedFields.name = req.body.name;
        }
        if (req.body.title && req.body.title !== existingFaculty.title) {
            updatedFields.title = req.body.title;
        }
        if (req.body.image && req.body.image !== existingFaculty.image) {
            updatedFields.image = req.body.image;
        }


        if (Object.keys(updatedFields).length === 0) {
            return res.status(200).json({
                status: 'success',
                message: 'No changes detected. Product information remains unchanged.',
                existingAbout,
            });
        }

        Object.assign(existingFaculty, updatedFields);


        await existingFaculty.save();

        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully',
            existingFaculty: existingFaculty,
        });


    }catch(error){
        return res.json({
                message: 'Error! [editFaculty]',
                error
            })
    }
};

module.exports.getFaculty = async (req, res) => {
    try {
        allFaculty = await Faculty.find();

        res.status(200).json({
            status: 'success',
            message: 'Faculty fetched successfully',
            allFaculty,
        })

    }catch(error){
        return res.json({
                message: 'Error! [getFaculty]',
                error
            })
    }
}