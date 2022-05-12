
function accesoAPI(){
    console.log("Llamando a SWAPI");
    const url = "https://swapi.dev/api/planets/1";

    var xhttp = new XMLHttpRequest();   // Se crea el objeto

    xhttp.open('GET', url);

    xhttp.setRequestHeader('Accept', 'application/json');

    // Se delega el evento onreadystatechange
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            console.log(JSON.stringify(data));
        }
    }

    xhttp.send();
}

accesoAPI();