const fila = document.querySelector('.contenedor-crousel')
const peliculas = document.querySelector('.pelicula')

const flechaIzquierda = document.querySelector('#flecha-izquierda')
const flechaDerecha = document.querySelector('#flecha-derecha')

// ------------ Event listener para la flecha -------------

const desplazarIzquierda = () => {
  fila.scrollLeft -= fila.offsetWidth
}
flechaIzquierda.addEventListener('click', desplazarIzquierda)

const desplazarDerecha = () => {
  fila.scrollLeft += fila.offsetWidth
}
flechaDerecha.addEventListener('click', desplazarDerecha)
