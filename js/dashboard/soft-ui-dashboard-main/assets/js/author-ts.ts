class Author{
    private foto:string;
    private nombre:string;
    private correo:string;
    private puesto:string;
    private area:string;
    private estatus:string;
    private fechaIngreso:string;

    constructor(foto:string, nombre:string, correo:string, puesto:string, area:string, estatus:string, fechaIngreso:string){
        this.foto = foto;
        this.nombre = nombre;
        this.correo = correo;
        this.puesto = puesto;
        this.area = area;
        this.estatus = estatus;
        this.fechaIngreso = fechaIngreso;
    }

    getFoto(){
        return this.foto;
    }

    setFoto(foto:string){
        this.foto = foto;
    }

    getNombre(){
        return this.nombre;
    }
    
    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getCorreo(){
        return this.correo;
    }

    setCorreo(correo:string){
        this.correo = correo;
    }

    getPuesto(){
        return this.puesto;
    }

    setPuesto(puesto:string){
        this.puesto = puesto;
    }

    getArea(){
        return this.area;
    }

    setArea(area:string){
        this.area = area;
    }

    getEstatus(){
        return this.estatus;
    }

    setEstatus(estatus:string){
        this.estatus = estatus;
    }

    getFechaIngreso(){
        return this.fechaIngreso;
    }

    setFechaIngreso(fechaIngreso:string){
        this.fechaIngreso = fechaIngreso;
    }
}