const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("./../../../utils/responseHandler/response");
const {
  getProductSer,
  addProductSer,
  updateProductSer,
  deleteProductSer
} = require("../services/apiServices");

const getProducts = async (req, res) => {
  try {
    console.log("inside the getProducts controller--->");
    const data = await getProductSer(req);
    return sendSuccessResponse(res, data);
  } catch (err) {
    console.log("inside the getProductsSer Error--->", err.message);
    return sendErrorResponse(res, err);
  }
};
const addProduct = async (req, res) => {
  try {
    console.log("inside the addProduct controller--->");
    const data = await addProductSer(req);
    return sendSuccessResponse(res, data);
  } catch (err) {
    console.log("inside the addProductSer Error--->", err.message);
    return sendErrorResponse(res, err);
  }
};
const updateProduct = async (req, res) => {
  try {
    console.log("inside the updateProduct controller--->");
    const data = await updateProductSer(req);
    return sendSuccessResponse(res, data);
  } catch (err) {
    console.log("inside the updateProductSer Error--->", err.message);
    return sendErrorResponse(res, err);
  }
};
const deleteProduct = async (req, res) => {
  try {
    console.log("inside the deleteProduct controller--->");
    const data = await deleteProductSer(req);
    return sendSuccessResponse(res, data);
  } catch (err) {
    console.log("inside the deleteProductSer Error--->", err.message);
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};