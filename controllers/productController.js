// const { products } = require('../config/databaseConfig')
const db = require('../models')


//Create the actual model
const Product = db.products

//main work start

//1. crate product
const addProduct = async (req, res) => {

    let productInfo = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        pusblished: req.body.pusblished ? req.body.pusblished : false
    }

    const newProduct = await Product.create(productInfo)
    res.status(200).send(newProduct)

}

// 2. Get ALl Products information
const getAllProducts = async (req, res) => {

    let productInfo = await Product.findAll({}) //get all the data
    res.status(200).send(productInfo)
}

// 3. Get one product information
const getOneProduct = async (req, res) => {
    let id = req.params.id
    let productInfo = await Product.findOne({ where: { id: id } })
    res.status(200).send(productInfo)
}

// 4. Update the Product
const updateProduct = async (req, res) => {
    let id = req.params.id

    const productUpdationInfo = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(productUpdationInfo)
}

// 5 Delete the product
const deleteProduct = async (req, res) => {
    let id = req.params.id

    await Product.destroy({ where: { id: id } })
    res.status(200).send('Product deleted')
}

// 6 Get Published Product
const getPublishedProduct = async (req, res) => {

    const productInfo = await Product.findAll({ where: { published: true } })
    res.status(200).send(productInfo)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    getPublishedProduct,
    updateProduct,
    deleteProduct
}
