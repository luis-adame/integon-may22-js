// Todas las caracteristicas de un Animal relevantes para nuestro sistema
// Se encapsulan en una clase en donde se abstraen dichas caracteristicas
class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultaDetalles(){
        return (`El nombre del animal es: ${this.nombre} y su tipo es: ${this.tipo}`);
    }
}

// Se instancia la clase Animal y se crea un objeto de ese tipo
let animal1 = new Animal("hipopotamo","mamifero");

//console.log(animal1.consultaDetalles());

function imprimeAnimal(animal){
    try{
        console.log(animal.consultaDetalles());
    }catch(ex){
        console.log("Se recibio objeto que no es animal...");
    }
    
}

imprimeAnimal(animal1);
imprimeAnimal(1000);


class Mamifero extends Animal{
    constructor(nombre, tipo, especial){
        super(nombre, tipo);
        this.especial = especial;
    }

    consultaDetalles(){
        return (`El nombre del animal es: ${this.nombre} y su tipo es: ${this.tipo} el campo especial es ${this.especial}`);
    }
}

class Oviparo extends Animal{

}

let mamifero1 = new Mamifero("toro", "mamifero", "especial");