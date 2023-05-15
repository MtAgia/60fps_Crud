import Usuario from "./classUsuario.js";
const formularioRegistro = document.querySelector("#formulario-registro");
const registroNombre = document.querySelector("#registro-nombre");
const registroMail = document.querySelector("#registro-email");
const registroPassword = document.querySelector("#registro-password");
const registroRepetirPassword = document.querySelector("#registro-repetir-password");
const registroErrorMensaje = document.querySelector("#registro-error-mensaje");
const modalRegistroExitoso = new bootstrap.Modal(document.getElementById("modalRegistroExitoso"));
const btnLogin = document.querySelector("#btn-login-registro");
const modalLogin = new bootstrap.Modal(document.querySelector("#modal-login"));


formularioRegistro.addEventListener("submit", registrar);
registroNombre.addEventListener("input", validarNombre);
registroMail.addEventListener("input", validarEmail);
registroPassword.addEventListener("input", validarPassword);
registroRepetirPassword.addEventListener("input", validarRepetirPassword);
btnLogin.addEventListener("click", mostrarModalLogin);


function registrar(e) {
    e.preventDefault();
    
    let valid = validarNombre() && validarEmail() && validarPassword() && validarRepetirPassword();

    if (valid) {
        const nuevoUsuario = new Usuario(registroNombre.value, registroMail.value, registroPassword.value, false);
        if (Usuario.crearUsuario(nuevoUsuario)) {
            modalRegistroExitoso.show();
            formularioRegistro.reset();
        } else {
            registroErrorMensaje.classList.remove("d-none");
        }
    }
}
  
function validarEmail() {
    registroErrorMensaje.classList.add("d-none");
    const regExMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regExMail.test(registroMail.value)) {
        registroMail.classList.remove("is-invalid");
        registroMail.classList.add("is-valid");
        return true;
    } else {
        registroMail.classList.remove("is-valid");
        registroMail.classList.add("is-invalid");
        return false;
    }
}

function validarPassword() {
    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\:;"'<>,.?/~`])(?=.{8,16})/;
    if (regExPassword.test(registroPassword.value)) {
        registroPassword.classList.remove("is-invalid");
        registroPassword.classList.add("is-valid");
        return true;
    } else {
        registroPassword.classList.remove("is-valid");
        registroPassword.classList.add("is-invalid");
        return false;
    }
    
}

function validarRepetirPassword() {
    if (registroPassword.value === registroRepetirPassword.value) {
        registroRepetirPassword.classList.remove("is-invalid");
        registroRepetirPassword.classList.add("is-valid");
        return true;
    } else {
        registroRepetirPassword.classList.remove("is-valid");
        registroRepetirPassword.classList.add("is-invalid");
        return false;
    }
}

function validarNombre() {
    const nombre = registroNombre.value.trim();
    const regExNombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,30}$/;
  
    if (regExNombre.test(nombre)) {
      registroNombre.classList.remove("is-invalid");
      registroNombre.classList.add("is-valid");
      return true;
    } else {
      registroNombre.classList.remove("is-valid");
      registroNombre.classList.add("is-invalid");
      return false;
    }
}

function mostrarModalLogin() {
    if (btnLogin.innerHTML.toLowerCase() === "iniciar sesion") {
        modalRegistroExitoso.hide();
        modalLogin.show();
    } else {
        logout();
    }
}