//datos

let inscribirse = document.getElementById("texto");

input01.addEventListener("change", (evento) => {
    console.log("El alumno se llama.", evento.target.value);
});

input02.addEventListener("change", (evento) => {
    console.log("Dato de contacto.", evento.target.value);

});
textArea.addEventListener("change", (evento) => {
    console.log("Consulta previa:", evento.target.value);

});


//elecciones

let disciplina = [
    "Acrobacia Aérea",
    "Acrobacia en Piso",
    "Danza Clásica",
    "Danza Contemporánea",
];

let selectActividad = document.getElementById("select01");
for (const unaEleccion of disciplina) {
    let option = document.createElement("option");
    option.innerHTML = unaEleccion;
    selectActividad.appendChild(option);
}

let experiencia = [
    "Principiante",
    "Intermedio",
    "Avanzado",
];

let selectConocimiento = document.getElementById("select02");
for (const unNivel of experiencia) {
    let option = document.createElement("option");
    option.innerHTML = unNivel;
    selectConocimiento.appendChild(option);
}

//inscripcion

let felicidades = document.getElementById("boton");

felicidades.addEventListener("click", (eventoBoton) => { texto.innerHTML = eventoBoton.target.value + ("<p>Felicidades! Ya formas parte de AcroStudio. Te esperamos para tú primera clase.</p>") });


// recuperar actividad seleccionada

let miActividadRecuperada = localStorage.getItem("actividadesEnCurso");

console.log("Local storage", {
    recuperado: miActividadRecuperada,
});

actividadesDisponibles = JSON.parse(miActividadRecuperada);

console.log("Valor recuperado", {
    actividad5: actividadesDisponibles,
});

