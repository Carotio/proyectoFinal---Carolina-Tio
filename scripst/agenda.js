// mi intención en este apartado iba por otro camino pero no resultó

const icono = document.getElementById ("almanaque")
const icono1 = document.getElementById ("almanaque1")
const icono2 = document.getElementById ("almanaque2")
const icono3 = document.getElementById ("almanaque3")
const cerrar = document.getElementById ("close")
const dias = document.getElementById ("fechas")


icono.addEventListener ("click", () => {
    dias.showModal ()
})

cerrar.addEventListener ("click", () => {
    dias.close ()
})

icono1.addEventListener ("click", () => {
    dias.showModal ()
})

cerrar.addEventListener ("click", () => {
    dias.close ()
})

icono2.addEventListener ("click", () => {
    dias.showModal ()
})

cerrar.addEventListener ("click", () => {
    dias.close ()
})

icono3.addEventListener ("click", () => {
    dias.showModal ()
})

cerrar.addEventListener ("click", () => {
    dias.close ()
})
