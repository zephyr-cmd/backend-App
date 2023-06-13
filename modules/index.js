const express = require("express");
const Router = express.Router();
console.log("inside the index Modules--->");
Router.use("/weather",require("./weather"))
Router.use("/product",require("./product"))

module.exports=Router