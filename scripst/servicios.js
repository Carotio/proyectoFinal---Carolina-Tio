// Evento botones

let service = document.getElementById("anotarse");

service.addEventListener("click", (event) => {

    let accion = document.querySelectorAll(".inscripcion");
    for (const unaAccion of accion);
})

// Agenda    

/* Mi intención en este apartado iba por otro camino pero no resultó. Lo terminé haciendo rudimentario para mostrar el concepto.
Intenté hacer una agenda que se mostrara los días y pudieras seleccionar los horarios. 
Al hacer esto te mandaba al formulario de inscripción con la actividad selecionada ya precargada por el localStorage. */

const icono = document.getElementById("almanaque")
const icono1 = document.getElementById("almanaque1")
const icono2 = document.getElementById("almanaque2")
const icono3 = document.getElementById("almanaque3")
const cerrar = document.getElementById("close")
const dias = document.getElementById("fechas")


icono.addEventListener("click", () => {
    dias.showModal()
})
cerrar.addEventListener("click", () => {
    dias.close()
})
icono1.addEventListener("click", () => {
    dias.showModal()
})
cerrar.addEventListener("click", () => {
    dias.close()
})
icono2.addEventListener("click", () => {
    dias.showModal()
})
cerrar.addEventListener("click", () => {
    dias.close()
})
icono3.addEventListener("click", () => {
    dias.showModal()
})
cerrar.addEventListener("click", () => {
    dias.close()
})


//datos de actividades

class Actividad {
    constructor(disciplina, area, dificultad, elementoExtra, enCurso) {
        this.disciplina = disciplina;
        this.area = area;
        this.dificultad = dificultad;
        this.elementoExtra = elementoExtra;
        this.enCurso = enCurso;
    }
    toString() {
        return this.disciplina;
    }
}
let actividadesDisponibles = [];

// local Storage
actividadesDisponibles.push(new Actividad("Acrobacia", "aérea", "media", false, true));
actividadesDisponibles.push(new Actividad("Danza", "clásica", "alta", true, true));


let actividadesJSONFormat = JSON.stringify(actividadesDisponibles);
{
    resultado: actividadesJSONFormat
};
localStorage.setItem("actividadesEnCurso", actividadesJSONFormat);
