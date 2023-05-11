import VideoJuego from "./classJuegos.js";
/*
CRUD
Create
*/
let formJuegos = document.getElementById(`formJuegos`).addEventListener(`submit`, prepararJuego);
let listaJuegos = JSON.parse(localStorage.getItem(`listaJuego`)) || [];
if(!listaJuegos){
    listaJuegos = [];
}else{
    listaJuegos = listaJuegos.map((juego) =>
    new VideoJuego(juego.nombre,juego.precio,juego.descripcion,juego.categoria,juego.imagen,juego.requisitosDeSistema,juego.desarrollador,juego.resenas)
    );
}
console.log(listaJuegos)


function prepararJuego(e){
    e.preventDefault();
    crearPeli();
}

function crearPeli(){
let prueba = new VideoJuego("juan",300,"hola como andan","aventura","-","16de ram","juan","positivas");
listaJuegos.push(prueba)
localStorage.setItem(`listaJuego`, JSON.stringify(listaJuegos));
console.log(prueba);
console.log(listaJuegos)
}
