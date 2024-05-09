const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        applicantType: {    // alum or parent
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected"],
            default: "Pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);