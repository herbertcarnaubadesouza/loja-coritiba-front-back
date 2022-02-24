const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        titulo:{type: String, required:true},
        descricao:{type:String, required:true},
        imagem:{type:String, required: true},
        categorias:{type:Array},
        tamanho:{type:Array},
        cor:{type:Array},
        preco:{type:Number, required: true},
        inStock:{type: Boolean, default: true}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema);