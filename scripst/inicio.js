// fraces

//Como arreglo a futuro se puede traducir al español.

fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((json) => {

        let frase = document.getElementById("banner")
        frase.textContent = json.quote;


        console.log(json);
    })

    .catch(error => console.log(error));


// evento
let eventoBoton = document.getElementById("service");

eventoBoton.addEventListener("mousemove", () => { console.log("El usuario pasó por leer más de servicios"); });

let eventoBoton2 = document.getElementById("info");

eventoBoton2.addEventListener("mousemove", () => { console.log("El usuario pasó por leer más información"); });


// aranceles


let arancel = document.getElementById("input03");
let veces = document.getElementById("veces");

    // Cálculo del costo
function costo(precio, cantidad) {
    if (cantidad === 0) {
        return 0;
    }
    return precio + cantidad * 200;
}

arancel.addEventListener("keyup", (event) => {

    if (event.target.value === "") {
        return;
    }
    let valor = -1;
    try {
        valor = parseInt(event.target.value);
    } catch (e) {
    }

    if (valor <= 0 || valor > 5) {
        Swal.fire({
            icon: 'info',
            title: 'Por favor ingrese una opción válida',
            text: "Puedes consultar el calendario",
        });
        return;
    }

    let resultado = costo(1200, valor);
    veces.innerText = "Total abonar  $" + resultado;

});




