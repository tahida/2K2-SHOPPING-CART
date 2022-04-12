require("dotenv").config();

// basic express
const express  = require('express');
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes")

// Memanggil fungsi
connectDB();
const app = express();
app.use(express.json());

// membuat routes
app.use("api/products", productRoutes);





const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Is Running On PORT ${PORT}`));

 