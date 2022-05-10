
function generaObjeto(a, b, c){
    let edad = parseInt(b);
    let ingreso = parseInt(c);

    if(isNaN(edad)){
        alert("Edad no valido");
        return;
    }

    if(isNaN(ingreso)){
        alert("Ingreso no valido");
        return;
    }

    var objetoPersona = {
        "nombre" : a,
        "edad" : b,
        "ingreso" : c
    }

    personas.push(objetoPersona);
    
    console.log(personas);
}