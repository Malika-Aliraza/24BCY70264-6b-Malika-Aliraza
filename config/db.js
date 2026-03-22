const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://exp5b:admin123!@cluster0.jtfg4c6.mongodb.net/bankAPI?appName=Cluster0"
        );
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;