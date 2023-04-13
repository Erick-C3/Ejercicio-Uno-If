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

const USUARIO_NOMBRE_REGISTRADO = "Carlos";
const USUARIO_CONTRASENIA_REGISTRADA = "Carlos1.";

let usuarioNombreIngresado = prompt("Ingrese usuario");
let usuarioContraseniaIngresada = prompt("Ingresar contraseña");

if ( ( usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA)  && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO)) {
    document.write("Usuario y contraseña correctos");
} else {
    document.write("Usuario y contraseña incorrectos");
}