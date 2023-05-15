import Usuario from "./classUsuario.js";

const btnLogin = document.querySelector("#btn-login");
const formularioLogin = document.querySelector(".formulario-login");
const btnRegistro = document.querySelector("#btn-registro");
const modalLogin = new bootstrap.Modal(document.querySelector("#modal-login"));
const btnNavbarAdministracion = document.querySelector("#btn-navbar-administracion");
const btnNavbarDeseados = document.querySelector("#btn-navbar-deseados");

formularioLogin.email.addEventListener("input", validarEmail);
formularioLogin.password.addEventListener("input", validarPassword);
formularioLogin.addEventListener("submit", login);
btnLogin.addEventListener("click", mostrarModalLogin);

Usuario.crearUsuario(new Usuario("admin", "admin@mail.com", "Admin123#", true));

function mostrarModalLogin() {
    if (btnLogin.innerHTML.toLowerCase() === "iniciar sesion") {
        modalLogin.show();
    } else {
        logout();
    }
}

function login(e) {
    e.preventDefault();
    let valid = validarEmail() && validarPassword();
    if (valid) {
      if (Usuario.login(formularioLogin.email.value, formularioLogin.password.value)) {
        btnLogin.innerHTML = "Cerrar Sesion";
        btnRegistro.classList.add("d-none");
        modalLogin.hide();
        window.location.href = "../index.html";
      } else {
        const loginErrorMensaje = document.querySelector("#login-error-mensaje");
        loginErrorMensaje.classList.remove("d-none");
      }
    } 
}

function validarEmail() {
    const regExMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regExMail.test(formularioLogin.email.value)) {
        formularioLogin.email.classList.remove("is-invalid");
        formularioLogin.email.classList.add("is-valid");
        return true;
    } else {
        formularioLogin.email.classList.remove("is-valid");
        formularioLogin.email.classList.add("is-invalid");
        return false;
    }
}

function validarPassword() {
    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\:;"'<>,.?/~`])(?=.{8,16})/;
    if (regExPassword.test(formularioLogin.password.value)) {
        formularioLogin.password.classList.remove("is-invalid");
        formularioLogin.password.classList.add("is-valid");
        return true;
    } else {
        formularioLogin.password.classList.remove("is-valid");
        formularioLogin.password.classList.add("is-invalid");
        return false;
    }
    
}

function logout() {
    Usuario.logout();
    btnLogin.innerHTML = "Iniciar Sesion";
    btnRegistro.classList.remove("d-none");
    window.location.href = window.location.origin;
}

verificarUsuarioLogeado();

function verificarUsuarioLogeado(){
    const usuarioEnSessionStorage = JSON.parse(sessionStorage.getItem("loggedUser"));

    if (usuarioEnSessionStorage) {
        btnLogin.innerHTML = "Cerrar Sesion";
        btnRegistro.classList.add("d-none");
        
        if (usuarioEnSessionStorage.isAdmin == true) {
            btnNavbarAdministracion.classList.remove("d-none");
        } else {
            btnNavbarDeseados.classList.remove("d-none");
            btnNavbarAdministracion.classList.add("d-none");
        }

    } else {
        btnLogin.innerHTML = "Iniciar Sesion";
        btnRegistro.classList.remove("d-none");
        btnNavbarDeseados.classList.add("d-none");
        btnNavbarAdministracion.classList.add("d-none");
    }
}