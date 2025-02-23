const Product = require('../model/productSchema.js')

async function showAllProducts(req, res){
    try {
        const data = await Product.find({});
        // console.log(data)
        res.render('product/home.ejs', {products:data});
    } catch (error) {
        console.log(error)
    }
}


async function showSingleProduct(req, res){
    res.render('product/singleProduct.ejs')
}

async function addProductPage(req, res){
    res.render('product/addProduct.ejs')
}

async function createProduct(req, res){
    try {
        const a = await Product.create(req.body);
        // console.log(a)
        res.redirect('/p1/products'); 
    } catch (error) {
        console.log(error);
    }
}

async function editProductPage(req, res){
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('product/updateProduct.ejs', {product})
}

async function editProduct(req, res){
    try {
        const {id} = req.params;
        await Product.findByIdAndUpdate(id, req.body);
        res.redirect('/p1/products');
    } catch (error) {
        console.log(error)
    }
}

async function deleteProduct(req, res){
    try {
        const {id} = req.params;
    
        await Product.findByIdAndDelete(id);
    
        res.redirect('/p1/products');
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {showAllProducts, showSingleProduct, addProductPage, createProduct, editProduct, editProductPage, deleteProduct}