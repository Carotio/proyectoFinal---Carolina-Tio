
// evento
let eventoBoton = document.getElementById("service");

eventoBoton.addEventListener("mousemove", () => { console.log("El usuario pasó por leer más de servicios"); });

let eventoBoton2 = document.getElementById("info");

eventoBoton2.addEventListener("mousemove", () => { console.log("El usuario pasó por leer más información"); });


// veces a la semana

let cantidad1 = document.getElementById("input03");

cantidad1.addEventListener("change", (evnt) => {
    veces.innerHTML = evnt.target.value;
}); 
