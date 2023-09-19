const productController = require("../controllers/productController");

const router = require("express").Router();

router.post("/addProducts", productController.addProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/publish", productController.getPublishedProduct);
router.get("/:id", productController.getOneProduct);
router.put("update/:id", productController.updateProduct);
router.delete("delete/:id", productController.deleteProduct);

module.exports = router;
