// evento botones

let service = document.getElementById("anotarse");

service.addEventListener("click", (event) => {

let accion = document.querySelectorAll(".inscripcion");
    for (const unaAccion of accion) {
        console.log("El usuraio hizo click");
}})

//datos

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

actividadesDisponibles.push(new Actividad("Acrobacia", "aérea", "media", false, true));
actividadesDisponibles.push(new Actividad("Danza", "clásica", "alta", true, true));


let actividadesJSONFormat = JSON.stringify(actividadesDisponibles);

console.log("Almacenar actividades disponisbles", {
    resultado: actividadesJSONFormat
});

localStorage.setItem("actividadesEnCurso", actividadesJSONFormat);



