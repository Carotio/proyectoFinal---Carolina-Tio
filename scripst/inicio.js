// fraces

//Como arreglo a futuro se puede traducir al español.

let frase = document.getElementById("banner")
obtenerFrase().then(b => frase.textContent = b)

async function obtenerFrase() {

    return await fetch("https://api.kanye.rest")
        .then((response) => response.json())
        .then(value => value.quote)

}




// evento
let eventoBoton = document.getElementById("service");

eventoBoton.addEventListener("mousemove", () => { });

let eventoBoton2 = document.getElementById("info");

eventoBoton2.addEventListener("mousemove", () => { });


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
        5;
        return;

    }
    let valor = -1;
    try {
        valor = parseInt(event.target.value);
    } catch (e) {
    }

    if (valor != 1 && valor != 2 && valor != 3 && valor != 4 && valor != 5) {
        Swal.fire({
            icon: 'info',
            title: 'Por favor ingrese los días de la semana',
            text: "Puedes concurrir de 1 a 5 días",
        });
        return;
    }

    let resultado = costo(1200, valor);
    veces.innerText = "Total abonar  $" + resultado;

});




