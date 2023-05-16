//filtrado
document.addEventListener(`keyup`, (e) => {
  if (e.target.matches(`.inputBuscar`)) {
    document.querySelectorAll(`.juegos`).forEach((juegos) => {
      juegos.textContent.toLowerCase().includes(e.target.value)
        ? juegos.classList.remove(`filtro`)
        : juegos.classList.add(`filtro`);
    });
  }
});