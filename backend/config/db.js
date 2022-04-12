require("dotenv").config();
const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

// membuat koneksi ke database 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("MONGODB connection succes");
    } catch (error) {
        console.error("MONGODB connection erorr: "+ error);
        process.exit(1);
    }
};

module.exports = connectDB;