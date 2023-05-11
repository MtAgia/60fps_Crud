import VideoJuego from "./classJuegos.js";
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
    crearPeli();
}

function limpiarFrom() {
  formJuegos.reset();
}


function crearPeli(){
let prueba = new VideoJuego(
  nombre.value,
  precio.value,
  descripcion.value,
  categoria.value,
  imagen.value,
  reqDelSistema.value,
  desarrolador.value
);
listaJuegos.push(prueba)
localStorage.setItem(`listaJuego`, JSON.stringify(listaJuegos));
console.log(prueba);
console.log(listaJuegos)
limpiarFrom();
}
