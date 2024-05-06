const mongoose = require ('mongoose');
const dbconnect = ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://localhost:27017/products_cya", {}, (err, res) =>{
        if(!err){
            console.log("Conexion realizada correctamente")
        }
        else{
            console.log("Algo salio mal")
        }
    });
}

module.exports = dbconnect;