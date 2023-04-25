/*
    Problema?
    + credenciales de usuario registrado
    - informar el resultado via web
    + tenemos que agregar una forma de recibir el
        usuario y contraseña
    - verificar si el usuario que intenta loguearse
    esta registrado

    info ?

*/
const inputUsuario = document.querySelector("#usuario-nombre");
const inputContrasenia = document.querySelector("#usuario-contrasenia");
const pResultado = document.querySelector("#resultado");

const USUARIO_NOMBRE_REGISTRADO = "Carlos";
const USUARIO_CONTRASENIA_REGISTRADA = "Carlos1.";

const USUARIO_NOMBRE_REGISTRADO_2 = "Jose";
const USUARIO_CONTRASENIA_REGISTRADA_2 ="123";

/* let usuarioNombreIngresado = prompt("Ingrese usuario");
let usuarioContraseniaIngresada = prompt("Ingresar contraseña");
 */

let usuarioNombreIngresado = "def nombre";
let usuarioContraseniaIngresada = "def contrasenia";

function verificar(){
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContraseniaIngresada = inputContrasenia.value;   
    if ( ( usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA)  && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO)) {
        /* document.write("Usuario y contraseña correctos"); */
        pResultado.innerHTML = "Usuario y contraseña correctos "+usuarioNombreIngresado;
    } else if(( usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA_2)  && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO_2)){
        pResultado.innerHTML = "Usuario y contraseña correctos "+usuarioNombreIngresado;
    }else {
        pResultado.innerHTML = "Usuario y contraseña incorrectos";
        pResultado.style.color = "red";
        /* document.write("Usuario y contraseña incorrectos"); */
    }
}

