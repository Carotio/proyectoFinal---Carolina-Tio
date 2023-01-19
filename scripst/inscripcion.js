//datos

let inscribirse = document.getElementById("texto");
let formulario = document.getElementById("formulario")
let nombre = document.getElementById("input01")
let email = document.getElementById("input02")
let textArea = document.getElementById("textArea")

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

class Usuario {
    constructor(nombre, actividad, experiencia, email, comentario) {
        this.nombre = nombre;
        this.actividad = actividad;
        this.experiencia = experiencia;
        this.email = email;
        this.comentario = comentario
    }
}

let usuarios = []

//Formulario

formulario.addEventListener("submit", (eventoBoton) => {
    eventoBoton.preventDefault()
    let nombreUsuario = nombre.value
    let actividadUsuario = selectActividad.value
    let experienciaUsuario = selectConocimiento.value
    let emailUsuario = email.value
    let comentarioUsuario = textArea.value

    if (nombreUsuario != "" && actividadUsuario != "" && experienciaUsuario != "" && emailUsuario != "") {
        let usuarioCreado = new Usuario(nombreUsuario, actividadUsuario, experienciaUsuario, emailUsuario, comentarioUsuario)
        usuarios.push(usuarioCreado)
        formulario.reset()
        console.log(usuarios)
        Swal.fire({
            title: 'Deseas realizar la incripción?',
            text: "Esta acción no puede ser revertida",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#C0D966',
            cancelButtonColor: '#F27979',
            confirmButtonText: 'Inscribirme!',
            cancelButtonText: 'Cancelar', 
            destination: href="../pages/servicios",
        }).then(() => {
            if (nombreUsuario != "" && actividadUsuario != "" && experienciaUsuario != "" && emailUsuario != "")
                Swal.fire(
                    'Felicidades, ya formas parte de AcroStudio!',
                    'Te esperamos para tú próxima clase',
                    'success'
                )
    })}})

// recuperar actividad seleccionada

let miActividadRecuperada = localStorage.getItem("actividadesEnCurso");

console.log("Local storage", {
    recuperado: miActividadRecuperada,
});

actividadesDisponibles = JSON.parse(miActividadRecuperada);

console.log("Valor recuperado", {
    actividad5: actividadesDisponibles,
});
