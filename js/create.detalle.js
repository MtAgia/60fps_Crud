const parametroId = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
// console.log(parametroCodigo.get('codigo'));

const usuario = JSON.parse(localStorage.getItem('listaPeliculas')) || [];

const juegoBuscado = listaPeliculas.find((juego)=> juego.id === parametroId.get('codigo'))

const seccion =  document.getElementById('seccionDetalleJuego');


seccion.innerHTML =`<section class="margenes" id="seccionDetalleJuego">
<div class="contenedor-grid">

  <div class="imagen">
    <img src="${juegoBuscado.imagen}" alt="${juegoBuscado.titulo}" />
  </div>

  <article class="contenido">
    <div>
      <h3>
     ${peliBuscada.titulo}
    </h3>
  </div>
    
<div class="d-flex">
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
</div>
<div class="d-flex">
<button class="btn-categorias">Acción</button>
<button class="btn-categorias">Un solo jugador
</button>
<button class="btn-categorias">Multijugador</button>
<button class="btn-categorias">Lucha</button>
</div>

<div class="mt-3">
<h6>Desarrollador:</h6>
<p>${juegoBuscado.desarrollador}:</p>
<h6>Descripcion:</h6>
<p>${juegoBuscado.descripcion}: </p>
<h6>
Requerimientos mínimos:
</h6>
<ul>
<li>Sistema operativo: Windows 7/8/10 (64-bit)</li>
<li>Procesador: AMD FX-4350, 4.2 GHz / Intel Core i5-3470, 3.2 GHz</li>
<li>Memoria RAM: 4 GB</li>
<li>Tarjeta de video: Radeon HD 6870, 1 GB / GeForce GTX 650 Ti, 1 GB</li>
<li>Espacio en disco duro: 30 GB de espacio libre</li>
</ul>
<h6>Requerimientos recomendados:</h6>
<ul>
<li>Sistema operativo: Windows 7/8/10 (64-bit)</li>
<li>Procesador: AMD Ryzen 5 1400, 3.2 GHz / Intel Core i7-3770, 3.4 GHz</li>
<li>Memoria RAM: 8 GB</li>
<li>Tarjeta de video: Radeon HD 7870, 2 GB / GeForce GTX 660, 2 GB</li>
<li>Espacio en disco duro: 30 GB de espacio libre</li>
</ul>
</div>

  </article>
  <div class="card-carrito ">
    <h2>${juegoBuscado.precio}:</h2>
    <button class="btn btn-warning my-2">Comprar ahora</button>
    <button class="btn btn-outline-light">Añadir al carrito</button>
  </div>
</section>`

















seccion.innerHTML = `<article class="card mb-3">
<aside class="row g-0">
  <div class="col-md-4 text-center text-md-start">
    <img
      src="${peliBuscada.imagen}"
      class="img-fluid rounded-start"
      alt="${peliBuscada.titulo}"
    />
  </div>
  <article class="col-md-8">
    <article class="card-body">
      <h5 class="card-title">${peliBuscada.titulo}</h5>
      <p class="card-text">
        ${peliBuscada.descripcion}
      </p>
      <p class="card-text">
        Género:
        <span class="badge rounded-pill text-bg-primary"
          >${peliBuscada.genero}</span
        >
      </p>
      <p class="card-text">Año: ${peliBuscada.anio}</p>
      <p class="card-text">Duración: ${peliBuscada.duracion}min</p>
      <p class="card-text">País: ${peliBuscada.pais}</p>
      <p class="card-text">Reparto: ${peliBuscada.reparto}</p>
      <p class="card-text">
        <small class="text-body-secondary"
          >Last updated 3 mins ago</small
        >
      </p>
    </article>
  </article>
</aside>
</article>`