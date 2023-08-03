const express = require('express');
const router = express.Router();

const {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    createUser,
    lastUser
} = require("./controller/controller")

console.log("--------inside the index/product/routes ---->")

router.get("/", getProducts)                    //localhost:7000/api/v1/modules/product
router.post("/", addProduct)
router.put("/", updateProduct)
router.delete("/", deleteProduct)
router.get("/user", lastUser)
router.post("/user", createUser)

module.exports = router;