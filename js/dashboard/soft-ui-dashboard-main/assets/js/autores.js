function agregar(){
    let table = document.getElementById("tablaAutores");

    let nuevo = table.insertRow(-1);

    let nombre = nuevo.insertCell(0);
    nombre.innerHTML = `
        <div class="d-flex px-2 py-1">
            <div>
            <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
            </div>
            <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">Son Goku</h6>
            <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
            </div>
        </div>
    `;

    let funcion = nuevo.insertCell(1);
    funcion.innerHTML = `
        <p class="text-xs font-weight-bold mb-0">Manager</p>
        <p class="text-xs text-secondary mb-0">Organization</p>
    `;

    let estatus = nuevo.insertCell(2);
    estatus.innerHTML = `
        <span class="badge badge-sm bg-gradient-success">Online</span>
    `;
    estatus.className="align-middle text-center text-sm";

    let fechaContratacion = nuevo.insertCell(3);
    fechaContratacion.innerHTML = `
        <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
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