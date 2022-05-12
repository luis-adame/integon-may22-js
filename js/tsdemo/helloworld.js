let arregloRegistros = [];
let mensaje = "Hola mundo";
let dato = 5;
let encendido = false;
let otracadena = "";
let ejemplo1, ejemplo2, ejemplo3;
ejemplo1 = [10, 'cadena1', true];
ejemplo2 = [20, 'cadena2', false];
ejemplo3 = [30, 'cadena3', true];
arregloRegistros.push(ejemplo1);
arregloRegistros.push(ejemplo2);
arregloRegistros.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (let registro of arreglo) {
        console.log(registro);
    }
}
imprimirRegistros(arregloRegistros);
console.log(mensaje);
let encabezado = document.createElement("h1");
encabezado.textContent = mensaje;
document.body.appendChild(encabezado);
//# sourceMappingURL=helloworld.js.map