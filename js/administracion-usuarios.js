import Usuario from "./classUsuario.js";

const formCrearUsuario = document.querySelector("#form-crear-usuario");
const modalCrearUsuarios = new bootstrap.Modal(document.getElementById("modalAdministrarUsuario"));
const btnAgregarUsuario = document.querySelector("#btnAgregarUsuario");

const nombreUsuario = document.querySelector("#nombre-usuario");
const mailUsuario = document.querySelector("#email-usuario");
const passwordUsuario = document.querySelector("#password-usuario");
const registroErrorMensaje = document.querySelector("#registro-error-mensaje");
const registroExitosoMensaje = document.querySelector("#registro-exitoso");
const radioButtonYes = document.querySelector("#admin-yes");
const radioButtonNo = document.querySelector("#admin-no");
const sectionGestionarJuegos = document.querySelector("#gestionarJuegos");
const sectionGestionarUsuarios = document.querySelector("#gestionarUsuarios");

const btnGestionarUsuarios = document.querySelector("#btnGestionarUsuarios");
const btnGestionarJuegos = document.querySelector("#btnGestionarJuegos");



btnGestionarJuegos.addEventListener("click", () => {
    sectionGestionarJuegos.classList.remove("d-none");
    sectionGestionarUsuarios.classList.add("d-none");
});

btnGestionarUsuarios.addEventListener("click", () => {
    sectionGestionarUsuarios.classList.remove("d-none");
    sectionGestionarJuegos.classList.add("d-none");
});

formCrearUsuario.addEventListener("submit", prepararUsuario);
btnAgregarUsuario.addEventListener("click", mostrarModalCrearUsuario);
nombreUsuario.addEventListener("input", validarNombre);
passwordUsuario.addEventListener("input", validarPassword);
mailUsuario.addEventListener("input", validarEmail);

let verificarCrearUsuario = true;

let listaUsuarios = Usuario.getUsuarios();
cargaInicial();

function cargaInicial() {
    if(!listaUsuarios){
        listaUsuarios = [];
    }

    if (listaUsuarios.length > 0) {
        listaUsuarios.map((usuario, i) => crearFila(usuario, i + 1));
    } else {
    // le muestro el msj que no tengo elementos
  }
}

function crearFila(usuario, i){
    let tbody = document.querySelector("#tbody-usuario");
    tbody.innerHTML += `
    <tr>
        <th scope="row" class="text-light">${i}</th>
        <td class="text-light" >${usuario.nombre}</td>
        <td class="text-truncate ancho text-light pe-5">
        ${usuario.mail}
        </td>
        <td class="text-truncate text-light ancho pe-5">
        ${usuario.isAdmin}
        </td>
        <td>
          <button
            type="button"
            class="btn btn-warning mx-1"
            onclick="prepararEditarUsuario('${usuario.id}')"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button 
            type="button" 
            class="btn btn-danger mx-1"
            onclick="abrirModalEliminarUsuario('${usuario.id}')"
          >
            <i class="bi bi-x-square"></i>
          </button>
        </td>
      </tr>
    `;
}

function prepararUsuario(e){
    e.preventDefault();
    if (verificarCrearUsuario) {
        crearUsuario();
    } else {
        editarUsuario();
    }
}

function crearUsuario(){
    registroExitosoMensaje.classList.add("d-none");
    registroErrorMensaje.classList.add("d-none");
    let valid = validarNombre() && validarEmail() && validarPassword();

    if (valid) {
        let esAdmin;

        if (radioButtonYes.checked) {
            console.log("dice que si")
            esAdmin = true;
        }

        if (radioButtonNo.checked) {
            console.log("dice que no")
            esAdmin = false;
        }

        const nuevoUsuario = new Usuario(nombreUsuario.value, mailUsuario.value, passwordUsuario.value, esAdmin);
        if (Usuario.crearUsuario(nuevoUsuario)) {
            registroExitosoMensaje.classList.remove("d-none");
            formCrearUsuario.reset();
            crearFila(nuevoUsuario , listaUsuarios.length );
        } else {
            registroErrorMensaje.classList.remove("d-none");
        }
    }
}
  
function validarEmail() {
    const regExMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regExMail.test(mailUsuario.value)) {
        mailUsuario.classList.remove("is-invalid");
        mailUsuario.classList.add("is-valid");
        return true;
    } else {
        mailUsuario.classList.remove("is-valid");
        mailUsuario.classList.add("is-invalid");
        return false;
    }
}

function validarPassword() {
    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\:;"'<>,.?/~`])(?=.{8,16})/;
    if (regExPassword.test(passwordUsuario.value)) {
        passwordUsuario.classList.remove("is-invalid");
        passwordUsuario.classList.add("is-valid");
        return true;
    } else {
        passwordUsuario.classList.remove("is-valid");
        passwordUsuario.classList.add("is-invalid");
        return false;
    }
    
}

function validarNombre() {
    const nombre = nombreUsuario.value.trim();
    const regExNombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{2,30}$/;
  
    if (regExNombre.test(nombre)) {
      nombreUsuario.classList.remove("is-invalid");
      nombreUsuario.classList.add("is-valid");
      return true;
    } else {
      nombreUsuario.classList.remove("is-valid");
      nombreUsuario.classList.add("is-invalid");
      return false;
    }
}

function guardarEnLocalStorage(){
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}

function mostrarModalCrearUsuario(){
    formCrearUsuario.reset();
    modalCrearUsuarios.show();
}

