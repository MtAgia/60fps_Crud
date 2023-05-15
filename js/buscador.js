//filtrado
document.addEventListener(`keyup`, (e) => {
  if (e.target.matches(`.inputBuscar`)) {
    document.querySelectorAll(`.juegos`).forEach((pelis) => {
      pelis.textContent.toLowerCase().includes(e.target.value)
        ? pelis.classList.remove(`filtro`)
        : pelis.classList.add(`filtro`);
    });
  }
});