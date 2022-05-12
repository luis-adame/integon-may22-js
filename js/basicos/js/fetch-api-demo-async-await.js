//import fetch from 'node-fetch';

async function demoFetchAPI(){
    let url = "http://localhost:3005/autores";

    let response = await fetch(url);
    let autores = await response.json();

    console.log(autores);

    // fetch(url)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         let autores = data.autores;
    //         //console.log(autores.length);
    //         autores.forEach(autor =>{
    //             console.log(autor.nombre);
    //         });
    //     })
    //     .catch(function(error){
    //         console.log("El servidor no esta disponible.");
    //     });
}

demoFetchAPI();