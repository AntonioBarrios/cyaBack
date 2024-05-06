const mongoose = require('mongoose');
const catalogSchema= new mongoose.Schema(
    {
        id: {
            type: String
        },
        typeCatalog:{
            type: String
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

const ModelCatalog = mongoose.model("catalogs", catalogSchema);
module.exports = ModelCatalog;