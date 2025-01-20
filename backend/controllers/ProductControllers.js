import ProductModel from "../models/ProductModel.js"

export const ProductControllers={
    getAll:async(req,res)=>{
        let prod= await ProductModel.find()
        res.send(prod)
    },
    getById:async(req,res)=>{
        let id=req.params.id
        let selProd= await ProductModel.findById(id)
        res.send({
            data:selProd
        })
    },
    getPost:async(req,res)=>{
        let newProd= ProductModel(req.body)
        await newProd.save()
        res.send({
            data:req.body
        })
    },
    getDelete:async(req,res)=>{
        let {id}=req.params
        await ProductModel.findByIdAndDelete(id)
        res.send({
            message:"deleted"
        })
    },
    getUpdate:async(req,res)=>{
        let id= req.params.id
        let updateProduct=req.body
        let updatedProd= await ProductModel.findByIdAndUpdate({_id:id}, updateProduct,{new:true})
        res.send(updatedProd)
    }
}