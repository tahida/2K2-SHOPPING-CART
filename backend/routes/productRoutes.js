const express = require ("express");
const router = express.Router();

const {
    getAllProducts,
    getProductById,
} = require("../controller/productControllers");

// desc: Ini digunakan untuk mengambil seluruh product dari database
// route: GET digunakan untuk mengambil /api/products
// acces: public

router.get("/", getAllProducts);

// desc: ini digunakan untuk mengambil seluruh product dari database berdasarkan id
// route: GET /api/products
// acces: public
router.get("/:id", getProductById);


module.exports = router;