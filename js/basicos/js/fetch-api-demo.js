//import fetch from 'node-fetch';

function demoFetchAPI(){
    let url = "http://localhost:3005/autores";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let autores = data.autores;
            //console.log(autores.length);
            autores.forEach(autor =>{
                console.log(autor.nombre);
            });
        })
        .catch(function(error){
            console.log("El servidor no esta disponible.");
        });
}

demoFetchAPI();