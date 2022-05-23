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

    db = client.db("angulardb");

    users = db.collection("users-adminpro");

    console.log("Conectado a la DB");
});

app.get("/demo", (req,res) => {
    console.log("se ejecuto la ruta api...");
    //return {"status":"ok"}
    res.status(200).json({ok:true});
});

app.get("/users", (request,response) => {
  console.log("se ejecuto la ruta users...");
  users.find().toArray((err, items) =>{
      if(err){
          console.log(err);
          response.status(500).json({err:err});
          return;
      }
      response.status(200).json({users:items});
  });
});

app.post("/users", (request,response) => {
    users.insertOne(
        {
            Name:request.body.Name,
            Email:request.body.Email,
            Password:request.body.Password
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


// app.get("/alumnos", (request,response) => {
//     console.log("se ejecuto la ruta alumnos...");
//     alumnos.find().toArray((err, items) =>{
//         if(err){
//             console.log(err);
//             response.status(500).json({err:err});
//             return;
//         }
//         response.status(200).json({alumnos:items});
//     });
// });

// app.get("/alumnos/:id", (request,response) => {
//     let alumnoId = request.params.id;

//     alumnos.find(ObjectId(alumnoId)).toArray((err, items) =>{
//         if(err){
//             console.log(err);
//             response.status(500).json({err:err});
//             return;
//         }
//         response.status(200).json({alumnos:items});
//     });
// });

// app.post("/alumnos", (request,response) => {
//     alumnos.insertOne(
//         {
//             nombre:request.body.nombre,
//             apellido:request.body.apellido,
//             ciudad:request.body.ciudad
//         },
//         (err, result) => {
//             if(err){
//                 console.log(err);
//                 response.status(500).json({err:err});
//                 return;
//             }
//             response.status(200).json({ok:true});
//         }
//     )
// });

app.listen(3005, ()=>{
    console.log("Escuchando en el puerto 3005...");
});
