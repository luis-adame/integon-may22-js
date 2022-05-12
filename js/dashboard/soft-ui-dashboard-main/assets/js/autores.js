class Autor{
    constructor(foto, nombre, correo, puesto, area, estatus, fechaIngreso){
        this.foto = foto;
        this.nombre = nombre;
        this.correo = correo;
        this.puesto = puesto;
        this.area = area;
        this.estatus = estatus;
        this.fechaIngreso = fechaIngreso;
    }
}

let autores = [];
//document.getElementById("body-tabla").innerHTML="";

function agregar(){
    autores.push(new Autor("../assets/img/team-2.jpg","John Wick","johnw@gmail.com","Executive","Proyects","online","00-01-01"));

    let table = document.getElementById("tablaAutores");

    let nuevo = table.insertRow(-1);

    let nombre = nuevo.insertCell(0);
    nombre.innerHTML = `
        <div class="d-flex px-2 py-1">
            <div>
            <img src="${autores[autores.length-1].foto}" class="avatar avatar-sm me-3" alt="user1">
            </div>
            <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">${autores[autores.length-1].nombre}</h6>
            <p class="text-xs text-secondary mb-0">${autores[autores.length-1].correo}</p>
            </div>
        </div>
    `;

    let funcion = nuevo.insertCell(1);
    funcion.innerHTML = `
        <p class="text-xs font-weight-bold mb-0">${autores[autores.length-1].puesto}</p>
        <p class="text-xs text-secondary mb-0">${autores[autores.length-1].area}</p>
    `;

    let estatus = nuevo.insertCell(2);
    estatus.innerHTML = `
        <span class="badge badge-sm bg-gradient-success">${autores[autores.length-1].estatus}</span>
    `;
    estatus.className="align-middle text-center text-sm";

    let fechaContratacion = nuevo.insertCell(3);
    fechaContratacion.innerHTML = `
        <span class="text-secondary text-xs font-weight-bold">${autores[autores.length-1].fechaIngreso}</span>
    `;
    fechaContratacion.className = "align-middle text-center";

    let botonEdit = nuevo.insertCell(4);
    botonEdit.innerHTML = `
    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
    </a>
    `;
    botonEdit.className = "align-middle";
}