const mongoose = require('mongoose');
const productSchema= new mongoose.Schema(
    {
        id: {
            type: String
        },
        nombre:{
            type: String
        },
        precio:{
            type: Number
        },
        colores:{
            type:Array
        },
        imagen:{
            type:String
        }
    },
    {
        timestamps: true,
        versionKey:false,
    }  
)

const ModelProduct = mongoose.model("products", productSchema);
module.exports = ModelProduct;