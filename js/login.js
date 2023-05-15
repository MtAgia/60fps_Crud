import Usuario from "./classUsuario.js";

const btnLogin = document.querySelector("#btn-login");
const formularioLogin = document.querySelector(".formulario-login");
const btnRegistro = document.querySelector("#btn-registro");
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
            btnRegistro.classList.add("d-none");
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
    btnRegistro.classList.remove("d-none");
    window.location.href = window.location.origin;
}

verificarUsuarioLogeado();

function verificarUsuarioLogeado(){
    if (sessionStorage.getItem("loggedUser")) {
        btnLogin.innerHTML = "Cerrar Sesion";
        btnRegistro.classList.add("d-none");
    } else {
        btnLogin.innerHTML = "Iniciar Sesion";
        btnRegistro.classList.remove("d-none");
    }
}