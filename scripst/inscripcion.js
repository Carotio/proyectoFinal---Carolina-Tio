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
        Swal.fire({
            title: 'Deseas realizar la incripción?',
            text: "Esta acción no puede ser revertida",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#C0D966',
            cancelButtonColor: '#F27979',
            confirmButtonText: 'Inscribirme!',
            cancelButtonText: 'Cancelar',
        }).then(() => {
            if (nombreUsuario != "" && actividadUsuario != "" && experienciaUsuario != "" && emailUsuario != "") {
                Swal.fire(
                    'Felicidades, ya formas parte de AcroStudio!',
                    'Te esperamos para tú próxima clase',
                    'success'
                )
                formulario.reset()
                // guardar usuario

                let unUsuarioJSONFormat = JSON.stringify(usuarioCreado);
                localStorage.setItem("datos", unUsuarioJSONFormat);
            }

        })
    }
});

// recuperar usuario

let unUsuarioRecuperado = localStorage.getItem("datos");
if (unUsuarioRecuperado) {
    let usuarioRecuperado = JSON.parse(unUsuarioRecuperado);
    nombre.value = usuarioRecuperado.nombre;
    selectActividad.value = usuarioRecuperado.actividad
    selectConocimiento.value = usuarioRecuperado.experiencia
    email.value = usuarioRecuperado.email
    textArea.value = usuarioRecuperado.comentario
}





/*recuperar actividad seleccionada: 
En esta parte queria que cuando en la pages de servicios, 
Se haga click a inscribir en el boton de una actividad en particular. 
Esa se precargara en el formulario al iniciarlo. Pero no pude terminar*/

let miActividadRecuperada = localStorage.getItem("actividadesEnCurso");
;

actividadesDisponibles = JSON.parse(miActividadRecuperada);
;
