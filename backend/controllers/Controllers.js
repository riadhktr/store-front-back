const ProductSchema = require('../model/Product');


// create a new product

exports.AddProduct = async(req,res)=>{

    const newArticle = new ProductSchema(req.body);

    try {
        await newArticle.save() // enregistrement d'article
        res.status(200).json({msg:'product created',newArticle})
    } catch (error) {
        res.status(500).json({msg:'can not create a new product'})
    }
}

exports.GetProducts = async(req,res)=>{

    try {
        const productList = await ProductSchema.find() // resultat li fi collection lkol 
        res.status(200).json({msg:'all products',productList})
    } catch (error) {
        res.status(500).json({msg:'can not get any product'})
    }
}

exports.deleteProduct = async(req,res)=>{
    const {id} = req.params;
    try {
        await ProductSchema.findOneAndDelete(id);
        res.status(200).json({msg:"deleted with sucess"})
    } catch (error) {
        res.status(500).json({msg:"can not delete this article"})
    }
}

// update single product 

exports.UpdateArticle = async(req,res)=>{

    const{id} = req.params;

    try {
        const updated = await ProductSchema.findByIdAndUpdate(id,{$set:{...req.body}},{new:true}); // raja3li doc jdid 
        res.status(200).json({msg:"updated with sucess",updated})
    } catch (error) {
        res.status(500).json({msg:"can not update this product"})
    }
}