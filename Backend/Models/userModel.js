import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["student", "teacher"],
        default: "student",
    },
    language: {
        type: String,
        required: false
    }
});

export default mongoose.model("User", userSchema);