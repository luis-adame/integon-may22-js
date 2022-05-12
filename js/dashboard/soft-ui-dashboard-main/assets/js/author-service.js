document.getElementById("body-tabla").innerHTML="";

$(document).ready(function () {

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3005/autores',
        data: {},
        success: function (data) {
            // const lastGame = data.results.find();
	  
            // $("#game_date").html(lastGame.dateEvent);
            // $("#away_team").html(lastGame.strAwayTeam);
            // $("#home_team").html(lastGame.strHomeTeam);
            // $("#away_score").html(lastGame.intAwayScore);
            // $("#home_score").html(lastGame.intHomeScore);

            // $("#game_table").show();

            for(var i=0; i<data.autores.length; i++){
                console.log(data.autores[i]);
                agregarHTML(data.autores[i]);
            }
        }
    });
});


function nuevoAutor(valorFoto){
    $.ajax({
        type: "POST",
        dataType: 'json',
        contentType: "application/json",
        url: 'http://localhost:3005/autores',
        data: JSON.stringify({
            foto: valorFoto, 
            nombre: "Alexa Liras", 
            correo: "alexa@creative-tim.com", 
            puesto: "Programator", 
            area: "Developer", 
            estatus: "Offline", 
            fechaIngreso: "11/01/19"},
        ),
        success: function(data){
            console.log("Success");
            console.log(data);
        },
        error: function(data){
            console.log(data);
        }
      });
}


function agregarHTML(autor){

    let table = document.getElementById("tablaAutores");

    let nuevo = table.insertRow(-1);

    let nombre = nuevo.insertCell(0);
    nombre.innerHTML = `
        <div class="d-flex px-2 py-1">
            <div>
            <img src="${autor.foto}" class="avatar avatar-sm me-3" alt="user1">
            </div>
            <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">${autor.nombre}</h6>
            <p class="text-xs text-secondary mb-0">${autor.correo}</p>
            </div>
        </div>
    `;

    let funcion = nuevo.insertCell(1);
    funcion.innerHTML = `
        <p class="text-xs font-weight-bold mb-0">${autor.puesto}</p>
        <p class="text-xs text-secondary mb-0">${autor.area}</p>
    `;

    let estatus = nuevo.insertCell(2);
    estatus.innerHTML = `
        <span class="badge badge-sm bg-gradient-success">${autor.estatus}</span>
    `;
    estatus.className="align-middle text-center text-sm";

    let fechaContratacion = nuevo.insertCell(3);
    fechaContratacion.innerHTML = `
        <span class="text-secondary text-xs font-weight-bold">${autor.fechaIngreso}</span>
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

$("#btnAddAuthor").click(function(){
	$("#formAuthor").css("display","");
});

$("#btnSave").click(function(){
    let foto = $('#foto').val();
    let nombre = $('#nombre').val();
    let correo = $('#correo').val();
    let puesto = $('#puesto').val();
    let area = $('#area').val();
    let estatus = $('#estatus').val();

	$("#formAuthor").css("display","none");
});

$("#btnCancel").click(function(){
	$("#formAuthor").css("display","none");
});