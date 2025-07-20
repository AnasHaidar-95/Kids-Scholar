import mongoose from "mongoose";

const badgeSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    acquiredAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Badge", badgeSchema);