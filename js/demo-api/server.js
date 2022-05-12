const {response, request} = require("express");
const express = require("express"); // requerimos el modulo de express

const mongo = require("mongodb").MongoClient;

const app = express();  // definimos una app de express

app.use(express.json()); // middleware

const cors = require('cors');
const { ObjectId } = require("mongodb");
app.use(cors({
    origin:'*',
    credentials:true,
    optionsSuccessStatus:200,
}));

const url = "mongodb://localhost:27017";

let db
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
},
(err, client) =>{
    if(err){
        console.log(err);
        return;
    }
    db = client.db("cursojavascript");
    console.log("Conectado a la DB");
    alumnos = db.collection("alumnos");
    autores = db.collection("authors");
    usuarios = db.collection("usuarios");
});

app.get("/demo", (req,res) => {
    console.log("se ejecuto la ruta demo-api...");
    //return {"status":"ok"}
    res.status(200).json({ok:true});
});

app.get("/alumnos", (request,response) => {
    console.log("se ejecuto la ruta alumnos...");
    alumnos.find().toArray((err, items) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumnos:items});
    });
});

app.get("/alumnos/:id", (request,response) => {
    let alumnoId = request.params.id;

    alumnos.find(ObjectId(alumnoId)).toArray((err, items) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumnos:items});
    });
});

app.post("/alumnos", (request,response) => {
    alumnos.insertOne(
        {
            nombre:request.body.nombre,
            apellido:request.body.apellido,
            ciudad:request.body.ciudad
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    )
});

app.get("/autores", (request,response) => {
    console.log("se ejecuto la ruta autores...");
    autores.find().toArray((err, items) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({autores:items});
    });
});

app.post("/autores", (request,response) => {
    autores.insertOne(
        {
            foto:request.body.foto,
            nombre:request.body.nombre,
            correo:request.body.correo,
            puesto:request.body.puesto,
            area:request.body.area,
            estatus:request.body.estatus,
            fechaIngreso:request.body.fechaIngreso,
        },
        (err, result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});
        }
    )
});

app.get("/usuarios", (request,response) => {
    console.log("se ejecuto la ruta usuarios...");
    usuarios.find().toArray((err, items) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({usuarios:items});
    });
});

app.listen(3005, ()=>{
    console.log("Escuchando en el puerto 3005...");
});