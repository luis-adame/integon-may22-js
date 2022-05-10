var variable="Luis Felipe Adame";
console.log(variable);
console.log(typeof variable);

console.log(`El nombre del uusario es: ${variable}.`);

variable = 100;
console.log(variable);
console.log(typeof variable);

variable = true;
console.log(variable);
console.log(typeof variable);

variable = {
    "nombre" : "Luis",
    "ciudad" : "Tijuana",
    "puesto" : "Software developer jr"
}

console.log(variable);
console.log(typeof variable);
console.log(variable.ciudad);
console.log(typeof variable);

variable = function(a, b){
    if(a > b)
        console.log("El numero mayor es "+a);
    else
        console.log("El numero mayor es "+b);
}

console.log(variable);
console.log(variable(8,2));

variable = function(a, b){
    if(a > b)
        return a;
    else
        return b;
}

console.log(variable(8,2));
console.log(typeof variable);

variable = new Date();
console.log(variable);
console.log(typeof variable);

let dato1=100;
let dato2=200;
let dato3=50;

if(dato1 > dato2 & dato2 > dato3)
    console.log("Se cumple la condicion");