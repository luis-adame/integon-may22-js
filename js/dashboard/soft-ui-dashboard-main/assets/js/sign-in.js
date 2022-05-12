//import fetch from 'node-fetch';

function demoFetchAPI(correo, password){
    let url = "http://localhost:3005/usuarios";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let usuarios = data.usuarios;
            //console.log(autores.length);
            // autores.forEach(autor =>{
            //     console.log(autor.nombre);
            // });

            let selected = usuarios.find(e => e.correo == correo);
            if(selected == null){
                console.log('Usuario no existe');
                document.getElementById("email-msg").style.display = 'inline';
            }else{
                if(selected.password != password){
                    console.log('Contrasenia no valida');
                    document.getElementById("password-msg").style.display = 'inline';
                }else{
                    console.log('bienvenido');
                    escondeCamposLogin();
                }
            }

        })
        .catch(function(error){
            console.log("El servidor no esta disponible.");
        });
}

function signIn(){
    document.getElementById("email-msg").style.display = 'none';
    document.getElementById("password-msg").style.display = 'none';

    let emailtxt = document.getElementById("email").value;
    let passwordtxt = document.getElementById("password").value;

    demoFetchAPI(emailtxt, passwordtxt);

    // let usuario = usuarios.find(e => e.email == emailtxt);

    // if(usuario){
    //     if(usuario.password == passwordtxt){
    //         escondeCamposLogin();
    //     }else{
    //         document.getElementById("password-msg").style.display = 'inline';
    //     }
    // }else{
    //     document.getElementById("email-msg").style.display = 'inline';
    // }
}

// let usuarios = [
// {
//     "email" : "prueba@gmail.com",
//     "password" : "password"
// },
// {
//     "email" : "movil.adame@gmail.com",
//     "password" : "1234"
// }
// ];

// function signIn(){
//     document.getElementById("email-msg").style.display = 'none';
//     document.getElementById("password-msg").style.display = 'none';

//     let emailtxt = document.getElementById("email").value;
//     let passwordtxt = document.getElementById("password").value;

//     let usuario = usuarios.find(e => e.email == emailtxt);

//     if(usuario){
//         if(usuario.password == passwordtxt){
//             escondeCamposLogin();
//         }else{
//             document.getElementById("password-msg").style.display = 'inline';
//         }
//     }else{
//         document.getElementById("email-msg").style.display = 'inline';
//     }
// }

function escondeCamposLogin(){
    document.getElementById("camposLogin").style.display = 'none';
    document.getElementById("welcome-usr").innerHTML += `<h1>Bienvenido ${document.getElementById("email").value}</h1>`;
}