class Empleado {
    constructor(name, telefono) {
        this.nombre = name,
            this.telefono = telefono;
    }
    getNombre() {
        return `El nombre del empleado es ${this.nombre}`;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(name) {
        this.nombre = name;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, numeroEmpleados) {
        super(nombre, telefono);
        this.noEmpleadosACargo = numeroEmpleados;
    }
    getNoEmpleadosACargo() {
        return this.getNoEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero) {
        this.noEmpleadosACargo = numero;
    }
}
let empleado1 = new Empleado("Juan Perez", "1234567890");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Wilson Garcia", "12341234", 10);
console.log(manager1);
//# sourceMappingURL=oop.js.map