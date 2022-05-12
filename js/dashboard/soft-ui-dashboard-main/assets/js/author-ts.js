var Author = /** @class */ (function () {
    function Author(foto, nombre, correo, puesto, area, estatus, fechaIngreso) {
        this.foto = foto;
        this.nombre = nombre;
        this.correo = correo;
        this.puesto = puesto;
        this.area = area;
        this.estatus = estatus;
        this.fechaIngreso = fechaIngreso;
    }
    Author.prototype.getFoto = function () {
        return this.foto;
    };
    Author.prototype.setFoto = function (foto) {
        this.foto = foto;
    };
    Author.prototype.getNombre = function () {
        return this.nombre;
    };
    Author.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Author.prototype.getCorreo = function () {
        return this.correo;
    };
    Author.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    Author.prototype.getPuesto = function () {
        return this.puesto;
    };
    Author.prototype.setPuesto = function (puesto) {
        this.puesto = puesto;
    };
    Author.prototype.getArea = function () {
        return this.area;
    };
    Author.prototype.setArea = function (area) {
        this.area = area;
    };
    Author.prototype.getEstatus = function () {
        return this.estatus;
    };
    Author.prototype.setEstatus = function (estatus) {
        this.estatus = estatus;
    };
    Author.prototype.getFechaIngreso = function () {
        return this.fechaIngreso;
    };
    Author.prototype.setFechaIngreso = function (fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    };
    return Author;
}());
