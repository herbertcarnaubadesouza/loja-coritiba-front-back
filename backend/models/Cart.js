const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema(
    {
        userId:{type: String, required:true},
        produtos:[
            {
                productId:{
                    type: String
                },
                quantidade: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    {timestamps:true}
);

module.exports = mongoose.model("Cart", CartSchema);