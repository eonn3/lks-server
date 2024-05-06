const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        facebook: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("About", aboutSchema)