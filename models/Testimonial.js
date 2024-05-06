import mongoose from "mongoose";
import { type } from "os";

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
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);