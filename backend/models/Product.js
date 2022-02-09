const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        titulo:{type: String, required:true, unique:true},
        descricao:{type:String, required:true},
        imagem:{type:String, required: true},
        categorias:{type:Array},
        tamanho:{type:String},
        cor:{type:String},
        preco:{type:Number, required: true},
    },
    {timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema);