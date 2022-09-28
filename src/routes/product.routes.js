const { addProduct, updateProduct, deleteProduct, allProduct } = require("../controllers/productController");

const router = require('express').Router();

router.post('/addProduct', addProduct)
router.delete('/deleteProduct/:idProduct', deleteProduct)
router.put('/updateProduct/:idProduct', updateProduct)
router.get('/allProduct', allProduct)

module.exports = router;
