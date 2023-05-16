import VideoJuego from "./classJuegos.js";
import { totalValidaciones } from "./helpersAdministracion.js";

const formJuegos = document.getElementById("formJuegos");
const modalJuego = new bootstrap.Modal(document.getElementById("modalAdministrarJuego"));
const modalEliminarJuego = new bootstrap.Modal(document.getElementById("modalEliminarJuego"));
const btnAgregarJuego = document.querySelector("#btnAgregarJuego");
const tablaJuego = document.querySelector("tbody");
const idContainer = document.querySelector(".id-container");

formJuegos.addEventListener("submit", prepararJuego);
btnAgregarJuego.addEventListener("click", mostrarModalAdministrador);

let verificarCrearJuego = true;

const id = document.getElementById(`id`),
  nombre = document.getElementById(`nombre`),
  descripcion = document.getElementById(`descripcion`),
  imagen = document.getElementById(`imagen`),
  categoria = document.getElementById(`categoria`),
  precio = document.getElementById(`precio`),
  reqDelSistema = document.getElementById(`reqDelSistema`),
  desarrolador = document.getElementById(`desarrolador`);

let listaJuegos = JSON.parse(localStorage.getItem(`listaJuego`)) || [];
if(!listaJuegos){
    listaJuegos = [];
}else{
    listaJuegos = listaJuegos.map((juego) =>
    new VideoJuego(juego.nombre,juego.precio,juego.descripcion,juego.categoria,juego.imagen,juego.requisitosDeSistema,juego.desarrollador)
    );
}

cargaInicial();

function cargaInicial() {
  if (listaJuegos.length > 0) {
    listaJuegos.map((juego, i) => crearFila(juego, i + 1));
  } else {
    // le muestro el msj que no tengo elementos
  }
}

function crearFila(tablaJuego, i){
  let tbody = document.querySelector(`tbody`);
  tbody.innerHTML += `
  <tr>
      <th scope="row" class="text-light">${i}</th>
      <td class="text-light" >${tablaJuego.nombre}</td>
      <td class="text-truncate ancho text-light pe-5">
      ${tablaJuego.descripcion}
      </td>
      <td class="text-truncate text-light ancho pe-5">
      ${tablaJuego.imagen}
      </td>
      <td class="text-light" >${tablaJuego.categoria}</td>
      <td>
        <button
          type="button"
          class="btn btn-warning mx-1"
          onclick="prepararEditarJuego('${tablaJuego.id}')"
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button 
          type="button" 
          class="btn btn-danger mx-1"
          onclick="abrirModalEliminarJuego('${tablaJuego.id}')"
        >
          <i class="bi bi-x-square"></i>
        </button>
      </td>
    </tr>
  `;
}

function prepararJuego(e){
    e.preventDefault();
    if (verificarCrearJuego) {
      crearJuego();
    } else {
      editarJuego();
    }
}

function guardarEnLocalStorage(){
  localStorage.setItem("listaJuego", JSON.stringify(listaJuegos));
}

function limpiarFrom() {
  formJuegos.reset();
}
let alerta = document.getElementById(`alertError`);

function crearJuego(){

  let errores = totalValidaciones(nombre.value, 
  descripcion.value,
  imagen.value,
  categoria.value,
  precio.value,
  reqDelSistema.value,
  desarrolador.value
  )

  if(errores.length === 0){

    let prueba = new VideoJuego(
      nombre.value,
      precio.value,
      descripcion.value,
      categoria.value,
      imagen.value,
      reqDelSistema.value,
      desarrolador.value
    );

    listaJuegos.push(prueba);

    guardarEnLocalStorage();

    limpiarFrom();

    alerta.className = "alert alert-success ColorVerde border-0 text-center bg-black";
    alerta.innerHTML = "cargada correctamente";

    crearFila(prueba , listaJuegos.length );
  }else{
    alerta.className = "alert alert-success colorRojo border-0 text-center bg-black";
    alerta.innerHTML=  errores;
  }
}

window.prepararEditarJuego = (idJuego) => {
  idContainer.classList.remove("d-none");
  modalJuego.show();

  const juegoBuscado = listaJuegos.find((juego) => juego.id === idJuego);
  
  id.value = juegoBuscado.id;
  nombre.value = juegoBuscado.nombre;
  descripcion.value = juegoBuscado.descripcion;
  imagen.value = juegoBuscado.imagen;
  categoria.value = juegoBuscado.categoria;
  precio.value = juegoBuscado.precio;
  reqDelSistema.value = juegoBuscado.requisitosDeSistema;
  desarrolador.value = juegoBuscado.desarrolador;

  verificarCrearJuego = false;
}

function editarJuego() {
  const posicionJuego = listaJuegos.findIndex((juego) => juego.id === id.value);

  let errores = totalValidaciones(nombre.value, 
    descripcion.value,
    imagen.value,
    categoria.value,
    precio.value,
    reqDelSistema.value,
    desarrolador.value
  );

  if(errores.length === 0){

    listaJuegos[posicionJuego].nombre = nombre.value;
    listaJuegos[posicionJuego].descripcion = descripcion.value;
    listaJuegos[posicionJuego].imagen = imagen.value;
    listaJuegos[posicionJuego].categoria = categoria.value;
    listaJuegos[posicionJuego].precio = precio.value;
    listaJuegos[posicionJuego].requisitosDeSistema = reqDelSistema.value;
    listaJuegos[posicionJuego].desarrollador = nombre.desarrolador;
  
    guardarEnLocalStorage();
  
    tablaJuego.children[posicionJuego].children[1].innerHTML = nombre.value;
    tablaJuego.children[posicionJuego].children[2].innerHTML = descripcion.value;
    tablaJuego.children[posicionJuego].children[3].innerHTML = imagen.value;
    tablaJuego.children[posicionJuego].children[4].innerHTML = categoria.value;
  
    formJuegos.reset();
    modalJuego.hide();

  } else {
    alerta.className = "alert alert-success colorRojo border-0 text-center bg-black";
    alerta.innerHTML=  errores;
  }

}

let confirmadoEliminacion = false;
let idJuegoAEliminar;

const btnEliminarJuego = document.querySelector("#btn-eliminar-juego");
btnEliminarJuego.addEventListener("click", () => {
  confirmadoEliminacion = true;
  eliminarJuego(idJuegoAEliminar);
});

window.abrirModalEliminarJuego = (id) => {
  modalEliminarJuego.show();
  const juegoBuscado = listaJuegos.find((juego) => juego.id === id);
  const nombreEliminarJuego = document.querySelector("#nombre-juego-eliminar");

  idJuegoAEliminar = id;

  nombreEliminarJuego.textContent = `${juegoBuscado.nombre}`;
}

window.eliminarJuego = (id) => {
  if (!confirmadoEliminacion) {
    return;
  }

  modalEliminarJuego.hide();
  const posicionJuego = listaJuegos.findIndex((juego) => juego.id === id);

  if (posicionJuego === -1) {
    return;
  }

  confirmadoEliminacion = false;
  listaJuegos.splice(posicionJuego, 1);
  guardarEnLocalStorage();
  tablaJuego.removeChild(tablaJuego.children[posicionJuego]);
}

function mostrarModalAdministrador(){
  idContainer.classList.add("d-none");
  formJuegos.reset();
  modalJuego.show();
  verificarCrearJuego = true;
}

window.verificarPermisos = () => {
    const usuarioLogeado = JSON.parse(sessionStorage.getItem('loggedUser'));
    if (!usuarioLogeado || !usuarioLogeado.isAdmin) {
      window.location.href = 'sin-permisos.html';
    }
}
