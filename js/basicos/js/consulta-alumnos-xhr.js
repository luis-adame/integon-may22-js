//global.XMLHttpRequest = require('xhr2');

function accesoAPI(){
    console.log("Llamando a alumnos-api");
    const url = "http://localhost:3005/alumnos";

    var xhttp = new XMLHttpRequest();   // Se crea el objeto

    xhttp.open('GET', url);

    xhttp.setRequestHeader('Accept', 'application/json');

    // Se delega el evento onreadystatechange
    xhttp.onreadystatechange = function() {
        if(this.readyState == 1){
            console.log("Opened...");
        }
        if(this.readyState == 3){
            console.log("Loading...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            //console.log(JSON.stringify(data));
            console.log(data.alumnos.length);
            

            data.alumnos.forEach(alumno =>{
                imprime(alumno);
            });
        }
        if (this.readyState == 4 && this.status == 404){
            console.log("Dato no existe...");
        }
        if(this.readyState == 4){
            console.log(this.response);
        }
    }

    xhttp.send();
}

accesoAPI();

function imprime(alumno){
    let listahtml = document.getElementById("lista-alumnos");

    listahtml.innerHTML += `<li>${alumno.apellido}</li>`
}