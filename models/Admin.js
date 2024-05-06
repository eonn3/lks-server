const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

adminSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12); //hash password
})

module.exports = mongoose.model("Admin", adminSchema)