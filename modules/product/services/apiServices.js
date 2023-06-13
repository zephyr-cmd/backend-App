const axios = require("axios");
const ProductsModel = require("../../../model/product");

const getProductSer = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fetchProduct = await ProductsModel.find()
            if (fetchProduct.length > 0) {
                return resolve({
                    status: 200,
                    message: "Successfully fetch products",
                    data: {
                        count: fetchProduct.length,
                        products: fetchProduct
                    }
                })
            } else {
                return reject({
                    status: 404,
                    message: "No product found in the DB"
                })
            }
        } catch (err) {
            console.log("error--->", err);
            return reject({
                status: 503,
                message: err.message,
                data: err
            })
        }
    })
}
const addProductSer = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { name, quantity } = req.body;
            console.log(req.body)
            let newProduct = await ProductsModel.create({ name: name, quantity: quantity })
            return resolve({
                status: 200,
                message: "Successfully added the product",
                data: {
                    product: newProduct
                }
            })
        } catch (err) {
            console.log("error--->", err);
            return reject({
                status: 503,
                message: err.message,
                data: err
            })
        }
    })
}
const updateProductSer = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { name, quantity } = req.body;
            console.log("inside Update product", req.body)
            let updatedProduct = await ProductsModel.updateOne({ name: name }, { $inc: { quantity: quantity } })
            return resolve({
                status: 200,
                message: "Successfully updated the product",
                data: {
                    product: updatedProduct
                }
            })
        } catch (err) {
            console.log("error--->", err);
            return reject({
                status: 503,
                message: err.message,
                data: err
            })
        }
    })
}
const deleteProductSer = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { name } = req.body;
            console.log("inside delete product", req.body)
            let newProduct = await ProductsModel.deleteOne({ name: name })
            return resolve({
                status: 204,
                message: "Successfully deleted the product",
                data: {
                    newProduct
                }
            })
        } catch (err) {
            console.log("error--->", err);
            return reject({
                status: 503,
                message: err.message,
                data: err
            })
        }
    })
}

module.exports = {
    getProductSer,
    addProductSer,
    updateProductSer,
    deleteProductSer
}