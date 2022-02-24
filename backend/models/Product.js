const mongoose = require("mongoose")

const VariationSchema = new mongoose.Schema({
    cor: { type: String, required: false },
    tamanho: { type: String, required: false },
    imagem: { type: String, required: true },
})

const ProductSchema = new mongoose.Schema(
    {
        titulo:{type: String, required:true},
        descricao:{type:String, required:true},
        variacoes: {type: [VariationSchema], required: true },
        categorias:{type:Array},
        preco:{type:Number, required: true},
        inStock:{type: Boolean, default: true}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema);