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
console.log(listaJuegos)

function prepararJuego(e){
    e.preventDefault();
    crearJuego();
}

function limpiarFrom() {
  formJuegos.reset();
}


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
  }else{
    let alerta = document.getElementById(`alertError`);
    alerta.className = "alert alert-success colorRojo border-0 text-center bg-black"
    alerta.innerHTML=  errores
  }
}
