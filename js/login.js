import Usuario from "./classUsuario.js";

const btnLogin = document.querySelector("#btn-login");
const formularioLogin = document.querySelector(".formulario-login");
const modalLogin = new bootstrap.Modal(document.querySelector("#modal-login"));

formularioLogin.addEventListener("submit", login);
btnLogin.addEventListener("click", mostrarModalLogin);


function mostrarModalLogin() {
    if (btnLogin.innerHTML.toLowerCase() === "iniciar sesion") {
        modalLogin.show();
    } else {
        logout();
    }
}

function login(e) {
    e.preventDefault();
    if (validarEmail() && validarPassword()) {
        if (Usuario.login(formularioLogin.usuario.value, formularioLogin.contrasena.value)) {
            btnLogin.innerHTML = "Cerrar Sesion";
        } else {
            //Logica para lo que pasa si estan mal mail o contraseña
        }
    }
}

function validarEmail() {
    return true;
}

function validarPassword() {
    return true;
}

function logout() {
    Usuario.logout();
    btnLogin.innerHTML = "Iniciar Sesion";
    window.location.href = window.location.origin;
}