import { model, Schema } from "mongoose";

const ProductSchema= new Schema({
    image:String,
    name:String,
    desc:String
})

const ProductModel=new model("products3",ProductSchema)
export default ProductModel