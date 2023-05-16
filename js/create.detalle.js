const parametroId = new URLSearchParams(window.location.search);


const listaJuegos = JSON.parse(localStorage.getItem('listaJuego')) || [];

const juegoBuscado = listaJuegos.find((juego)=> juego.codigo === parametroId.get('codigo'))
console.log(listaJuegos)
console.log( parametroId.get('codigo'))

const seccion =  document.getElementById('seccionDetalleJuego');


seccion.innerHTML =`<div class="contenedor-grid">

<div class="imagen">
<img src="${juegoBuscado.imagen}" alt="${juegoBuscado.imagen}">
</div>

<article class="contenido">
  <div>
    <h3>
   ${juegoBuscado.nombre}
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
<button class="btn-categorias">${juegoBuscado.categoria}</button>
</div>

<div class="mt-3">
<h6>Desarrollador:</h6>
<p>${juegoBuscado.desarrollador}</p>
<h6>Descripcion:</h6>
<p>${juegoBuscado.descripcion} </p>
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
</div>

</article>
<div class="card-carrito ">
  <h2>${juegoBuscado.precio}</h2>
  <button class="btn btn-warning my-2">Comprar ahora</button>
  <button class="btn btn-outline-light">Añadir al carrito</button>
</div>`


