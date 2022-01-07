const express = require('express');
const app = express.Router();
const productController = require('../controllers/productController')

//GET///////////////////////////////////////////////////////////////

app.get("/", productController.getProducts);

app.get("/:id", productController.getProductID);

app.get("/name/:name", productController.getProductName);

app.get("/price/:price", productController.getProductPrice);

//POST////////////////////////////////////////////////////////////////

app.post("/", productController.addProduct);

//PUT//////////////////////////////////////////////////////////////////

app.put("/:id", productController.editProduct);

//PATCH//////////////////////////////////////////////////////////////////

app.patch("/:id", productController.editProduct);

//DELETE/////////////////////////////////////////////////////////////////

app.delete("/:id", productController.deleteProduct);

//////////////////////////////////////////////////////////////////////////

module.exports = app;
