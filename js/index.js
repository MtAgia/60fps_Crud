import Usuario from "./classUsuario.js";


function mostrarJuegos(){
    const contenedorJuegos = document.querySelector("#contenedor-juegos");
    const listaJuegos = JSON.parse(localStorage.getItem("listaJuego"));

    if (!listaJuegos || listaJuegos.length === 0) {
        contenedorJuegos.innerHTML = "<h2 class='text-center bg-green text-black'>Aún no hay juegos cargados</h2>";
        return;
    }
    
    listaJuegos.forEach(juego => {
        const cardJuego = document.createElement("div");
        cardJuego.className = "col-10 col-lg-3 card game-card px-0 mx-1 juegos mb-3 border-0"
        cardJuego.innerHTML = `
        <img src="${juego.imagen}" class="card-img-top" alt="game card image">
        <div class="card-body bg-dark text-white">
        <div class="d-flex justify-content-between flex-row flex-lg-column flex-xl-row">
            <h3 class="card-title fs-5">${juego.nombre}</h3>
        </div>
        <p class="card-text">${juego.descripcion}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center bg-dark">
        <p class="badge bg-dark mb-0"><i class="bi bi-currency-dollar pe-2"></i>${juego.precio}</p>
        <button class="btn btn-success float-end" onclick="redirigirADetalle('${juego.id}')"><i class="bi bi-arrow-right-circle-fill me-2"></i>Ver mas</button>
        </div>
        `;
    
        contenedorJuegos.appendChild(cardJuego); 
    });
}

window.redirigirADetalle = (codigo) =>{
    window.location.href = window.location.origin + '/pages/detalle1.html?codigo=' + codigo;
}

mostrarJuegos();
