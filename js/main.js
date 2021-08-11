const fila = document.querySelector('.contenedor-crousel')
const peliculas = document.querySelectorAll('.pelicula')

const flechaIzquierda = document.querySelector('#flecha-izquierda')
const flechaDerecha = document.querySelector('#flecha-derecha')

// ------------ Event listener para las flechas -------------

const desplazarIzquierda = () => {
  fila.scrollLeft -= fila.offsetWidth
  const indicadorActivo = document.querySelector('.indicadores .activo')
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo')
    indicadorActivo.classList.remove('activo')
  }
}
flechaIzquierda.addEventListener('click', desplazarIzquierda)

const desplazarDerecha = () => {
  fila.scrollLeft += fila.offsetWidth

  const indicadorActivo = document.querySelector('.indicadores .activo')
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo')
    indicadorActivo.classList.remove('activo')
  }
}
flechaDerecha.addEventListener('click', desplazarDerecha)

// --------- paginacion----------

const numeroPaginas = Math.ceil(peliculas.length / 5)

const listPage = []
for (let i = 0; i < numeroPaginas; i++) {
  listPage.push(document.createElement('button'))
  listPage[i].addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth
    document.querySelector('.indicadores .activo').classList.remove('activo')
    e.target.classList.add('activo')
  })
}
listPage[0].classList.add('activo')

// listPage.map((button, i) =>
//   button.addEventListener('click', () => {
//     fila.scrollLeft = i * fila.offsetWidth
//   })
// )

const indicadores = document.querySelector('.indicadores')
indicadores.append(...listPage)

// ---------------------- hover -----------------
// peliculas.forEach((pelicula) => {
//   pelicula.addEventListener('mouseenter', (e) => {
//     const elemento = e.currentTarget
//     setTimeout(() => {
//       peliculas.forEach((pelicula) => peliculas.classList.remove('hover'))
//       elemento.classList.add('hover')
//     }, 5000)
//   })
// })
