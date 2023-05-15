function redirigirAIndex() {
    window.location.href = '../index.html';
}
  
function actualizarContador(segundos) {
    const contador = document.getElementById('contador-redireccion');
    contador.textContent = segundos;
}
  
function esperarRedireccion(segundos) {
    if (segundos > 0) {
        actualizarContador(segundos);
        setTimeout(() => {
        esperarRedireccion(segundos - 1);
        }, 1000);
    } else {
        redirigirAIndex();
    }
}

esperarRedireccion(5);