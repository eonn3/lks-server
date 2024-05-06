import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
);