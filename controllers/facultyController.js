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
    try {
        const facultyId = req.params.facultyId;
        const existingFaculty = await Faculty.findById(facultyId);

        if (!existingFaculty) {
            return res.status(404).json({
                status: 'error',
                message: 'Faculty not found',
            });
        }

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
                message: 'No changes detected. Faculty information remains unchanged.',
                existingFaculty,
            });
        }

        Object.assign(existingFaculty, updatedFields);
        await existingFaculty.save();

        res.status(200).json({
            status: 'success',
            message: 'Faculty updated successfully',
            existingFaculty: existingFaculty,
        });
    } catch (error) {
        console.error('Error in editFaculty:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: error.message,
        });
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

module.exports.deleteFaculty = async (req, res) => {
    try {
        const facultyId = req.params;

        const facultyMember = await Faculty.findById(facultyId);

        if(!facultyMember){
            return res.json({
                message: 'Error! Faculty member does not exist! ',
                error
            });
        }else{
            await Faculty.findByIdAndDelete(facultyId);
            return res.json({
                message: 'Faculty member deleted from the database successfully! ',
                error
            });
        }
    } catch (error) {
        return res.json({
            message: 'Error! [deleteFaculty]',
            error
        })
    }
}