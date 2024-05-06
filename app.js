const express = require('express');
const dbconnect = require('./config');
const cors = require ('cors');
const ModelProduct = require('./productModel');
const ModelCatalog = require('./CatalogModel');
const app = express();

app.use(cors());
const router = express.Router();

//Rutas CRUD para API
//ESTO ES PARA EL PRODUCTO
router.post("/postProducts", async (req, res) =>{
    const body = req.body;
    const respuesta = await ModelProduct.create(body)
    res.send(respuesta)
})

router.get("/getProducts", async (req, res) =>{
    const respuesta = await ModelProduct.find({})
    res.send(respuesta);
})

router.get("/products/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelProduct.findById(id)
    res.send(respuesta);
})

router.put("/products/:id", async (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelProduct.findOneAndUpdate({ _id:id }, body)
    res.send(respuesta);
})

router.delete("/products/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelProduct.deleteOne({_id : id})
    res.send(respuesta);
})

//Rutas CRUD para API
//ESTO ES PARA EL CATALOGO
router.post("/catalogs", async (req, res) =>{
    const body = req.body;
    const respuesta = await ModelCatalog.create(body)
    res.send(respuesta)
})

router.get("/getCatalogs", async (req, res) =>{
    const respuesta = await ModelCatalog.find({})
    console.log(respuesta);
    res.send(respuesta);
})
router.get("/catalogs/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelCatalog.findById(id)
    res.send(respuesta);
})

app.use(express.json());
app.use(router);
app.listen(3001, () =>{
    console.log("El servidor esta operando normal en el puerto 3001")
});

dbconnect();