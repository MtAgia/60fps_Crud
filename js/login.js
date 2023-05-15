import Usuario from "./classUsuario.js";

const btnLogin = document.querySelector("#btn-login");
const formularioLogin = document.querySelector(".formulario-login");
const btnRegistro = document.querySelector("#btn-registro");
const modalLogin = new bootstrap.Modal(document.querySelector("#modal-login"));

formularioLogin.email.addEventListener("input", validarEmail);
formularioLogin.password.addEventListener("input", validarPassword);
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
    let valid = validarEmail() && validarPassword();
    if (valid) {
      if (Usuario.login(formularioLogin.email.value, formularioLogin.password.value)) {
        btnLogin.innerHTML = "Cerrar Sesion";
        btnRegistro.classList.add("d-none");
        modalLogin.hide();
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
    if (sessionStorage.getItem("loggedUser")) {
        btnLogin.innerHTML = "Cerrar Sesion";
        btnRegistro.classList.add("d-none");
    } else {
        btnLogin.innerHTML = "Iniciar Sesion";
        btnRegistro.classList.remove("d-none");
    }
}