import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;