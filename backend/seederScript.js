// mengkoneksikan dotenv
require("dotenv").config();

// membuat koneksi model 
const productData = require("./data/products");
// membuat koneksi ke database
const connectDB = require("./config/db");
// membuat koneksi ke models product
const Product = require("./models/Product");

// memanggil koneksi database
connectDB();

// membuat fungsi import data
const importData = async() => {
    try {
        // untuk mereplace data
        await Product.deleteMany({});
        // menambahkan data ke dalam database dan yang di tambahkan adalah products data
        await Product.insertMany(productData);
        console.log("Data import succes");
        process.exit();
    } catch (error) {
        console.error("Error import data");
        process.exit(1);
    }
};

// memanggil fungsi data yang diatas
importData();
