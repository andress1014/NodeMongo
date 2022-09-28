const productSchema = require("../model/productModel")
//Add product
const addProduct = (req, res) => {
    const { name, weight, quantity } = req.body
    if (!name || !weight || !quantity) return res.status(404).json({
        status: 'failed',
        message: 'No product name or price',
    });
    try {
        const addProd = new productSchema({
            name: name,
            weight: weight,
            quantity: quantity
        })
        addProd.save()
        res.status(200).json({
            success: true,
            message: "Product added"
        })
    } catch (error) {
        res.status(500).json({
            satus: "Failed",
            message: "Error on server",
            error: error
        })
    }
}

const updateProduct = async (req, res) => {
    const { idProduct } = req.params;
    const { name, weight, quantity } = req.body;
    if (!name || !weight || !quantity || idProduct) return res.status(404).json({
        status: 'failed',
        message: 'No product name or price',
    });
    try {
        const newProduct = await productSchema.findOneAndUpdate({
            _id: idProduct
        }, {
            $set: {
                name: name,
                weight: weight,
                quantity: quantity
            }
        });
        res.status(200).json({
            status: 'successfully',
            message: `product cod: (${idProduct}) updated`
        });
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: 'Failed server',
        })
    }
}

const allProduct = async (req, res) => {
    try {
        const allProd = await productSchema.find()
        res.status(200).json({
            success: true,
            message: "All products",
            data: {
                allProd
            }
        })
    } catch (error) {
        res.status(500).json({
            satus: "Failed",
            message: "Error on server",
            error: error
        })
    }
}
const deleteProduct = async (req, res) => {
    const { idProduct } = req.params;
    if (!idProduct) return res.status(404).json({
        satus: "Failed",
        message: "no id product",
    })
    try {
        const deleteProduct = await productSchema.findOneAndDelete({
            _id: idProduct
        });
        if (!deleteProduct) return res.status(401).json({
            status: 'failed',
            message: 'Product not exists',
        });
        return res.status(200).json({
            status: 'successfully',
            message: `product cod: (${idProduct}) deleted`
        });
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: 'Failed server',
            error: error
        })
    }
}
module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    allProduct
}
