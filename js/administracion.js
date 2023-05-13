import VideoJuego from "./classJuegos.js";
import { totalValidaciones } from "./helpersAdministracion.js";
/*
CRUD
Create
*/
let formJuegos = document.getElementById(`formJuegos`)
formJuegos.addEventListener(`submit`, prepararJuego);
let id = document.getElementById(`id`),
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
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="bi bi-pencil-square"></i></button
        ><button type="button" class="btn btn-danger mx-1" ">
          <i class="bi bi-x-square"></i>
        </button>
      </td>
    </tr>
  `;
}

function prepararJuego(e){
    e.preventDefault();
    crearJuego();
}

function limpiarFrom() {
  formJuegos.reset();
}
let alerta = document.getElementById(`alertError`);

function crearJuego(){
  //validacion
  let errores = totalValidaciones(nombre.value, 
  descripcion.value,
  imagen.value,
  categoria.value,
  precio.value,
  reqDelSistema.value,
  desarrolador.value
  )
  if(errores.length === 0){
    //creacion
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
    localStorage.setItem(`listaJuego`, JSON.stringify(listaJuegos));
    console.log(prueba);
    console.log(listaJuegos);
    limpiarFrom();
    alerta.className = "alert alert-success ColorVerde border-0 text-center bg-black"
    alerta.innerHTML = "cargada correctamente"
    crearFila(prueba , listaJuegos.length )
  }else{
    alerta.className = "alert alert-success colorRojo border-0 text-center bg-black"
    alerta.innerHTML=  errores
  }
}
