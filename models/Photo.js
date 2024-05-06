const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("Photo", photoSchema)