var Product = require("../models/product");

function getProduct(req,res){
	let productId = req.params.productId;

	Product.findById(productId, (err,product) => {
		if(err) return res.status(500).send({message:`Error al realizar la paticion: ${err}`});
		if(!product) return res.status(404).send({message: "El producto no existe"});

		res.status(200).send({product});
	});
}
function getProducts(req,res){
	Product.find({}, (err,products) => {
		if(err) return res.status(500).send({message:`Error al realizar la paticion: ${err}`});
		if(!products) return res.status(404).send({message:"No existen productos"});

		res.status(200).send({products});
	});
}
function updateProduct(req,res){
	let productId = req.params.productId;
	let update = req.body;
	Product.findByIdAndUpdate(productId,update,(err,product) => {
		if(err) res.status(500).send({message:`Error al actualizar el producto: ${err}`});

		res.status(200).send({product});
	});
}
function deleteProduct(req,res){
	let productId = req.params.productId;

    Product.findById(productId, (err,product) => {
        if(err) res.status(500).send({message:`Error al borrar el producto: ${err}`});

        product.remove(err => {
            if(err) res.status(500).send({message:`Error al borrar el producto: ${err}`});

            res.status(200).send({message:"El producto ha sido eliminado"});
        });


    });
}

function createProduct(req,res){
	console.log('POST /api/product');
	console.log(req.body);

	let product = new Product();
	product.name = req.body.name;
	product.price = req.body.price;
	product.picture = req.body.picture;
	product.category = req.body.category;
	product.description = req.body.description;

    //almacenar product
    product.save((err,product) =>{
    	if(err) res.status(500).send({message:`Error al guardad en la B.D: ${err}`});

    	res.status(200).send({product: product});

    });
    
}

module.exports = {
	getProduct,
	getProducts,
	updateProduct,
	deleteProduct,
	createProduct
};