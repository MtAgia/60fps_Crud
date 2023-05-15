import Usuario from "./classUsuario.js";

const formCrearUsuario = document.querySelector("#form-crear-usuario");
const modalCrearUsuarios = new bootstrap.Modal(document.getElementById("modalAdministrarUsuario"));
const btnAgregarUsuario = document.querySelector("#btnAgregarUsuario");

formCrearUsuario.addEventListener("submit", prepararUsuario);
btnAgregarUsuario.addEventListener("click", mostrarModalCrearUsuario);

const nombreUsuario = document.querySelector("#nombre-usuario");
const mailUsuario = document.querySelector("#email-usuario");
const passwordUsuario = document.querySelector("#password-usuario");
const adminOption = formCrearUsuario.adminoption.value;

cargaInicial();

function cargaInicial() {
    let listaUsuarios = Usuario.getUsuarios();

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
            onclick="prepararEditarJuego('${usuario.id}')"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button 
            type="button" 
            class="btn btn-danger mx-1"
            onclick="abrirModalEliminarJuego('${usuario.id}')"
          >
            <i class="bi bi-x-square"></i>
          </button>
        </td>
      </tr>
    `;
}

function prepararUsuario(e){

}

function mostrarModalCrearUsuario(){
    formCrearUsuario.reset();
    modalCrearUsuarios.show();
}