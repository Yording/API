var Product = require("../models/product");
module.exports = {
	getProduct:function (req,res){
		var productId = req.params.productId;

		Product.findById(productId,function (err,product)  {
			if(err) return res.status(500).send({message:"Error al realizar la paticion: ${err}"});
			if(!product) return res.status(404).send({message: "El producto no existe"});

			res.status(200).send({product:product});
		});
	},
	getProducts:function (req,res){
		Product.find({},function (err,products)  {
			if(err) return res.status(500).send({message:"Error al realizar la paticion: ${err}"});
			if(!products) return res.status(404).send({message:"No existen productos"});

			res.status(200).send({products:products});
		});
	},
	updateProduct:function (req,res){
		var productId = req.params.productId;
		var update = req.body;
		Product.findByIdAndUpdate(productId,update,function(err,product)  {
			if(err) res.status(500).send({message:"Error al actualizar el producto: ${err}"});

			res.status(200).send({product:product});
		});
	},
	deleteProduct:function (req,res){
		var productId = req.params.productId;

		Product.findById(productId,function (err,product)  {
			if(err) res.status(500).send({message:"Error al borrar el producto: ${err}"});

			product.remove(function (err)  {
				if(err) res.status(500).send({message:"Error al borrar el producto: ${err}"});

				res.status(200).send({message:"El producto ha sido eliminado"});
			});


		});
	},

	createProduct:function (req,res){
		console.log('POST /api/product');
		console.log(req.body);

		var product = new Product();
		product.name = req.body.name;
		product.price = req.body.price;
		product.picture = req.body.picture;
		product.category = req.body.category;
		product.description = req.body.description;

    //almacenar product
    product.save(function(err,product) {
    	if(err) res.status(500).send({message:"Error al guardad en la B.D: ${err}"});

    	res.status(200).send({product: product});

    });
    
}



};