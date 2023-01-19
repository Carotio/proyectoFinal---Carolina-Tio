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
/*  La intención era que el usuario pudiera ver de antemano el precio según la cantidad de veces a la semana que quiera concurrir, pero por alguna razón no me hace el cálculo */
let resultado = 0;

function valor(precio, cantidad) {
    if (cantidad === 0) { return 0; }
    else {
        return (precio + (cantidad * 200))
    }
}

let arancel = document.getElementById("input03");
resultado = valor(1200, (arancel.value));
arancel.addEventListener("change", () => {
    veces.textContent = "Total abonar  $" + resultado;
    console.log(resultado)

    texto.addEventListener("onfocus", (e) => {
        eventoBoton.preventDefault(e)

        if (arancel != "1" || arancel != "2" || arancel != "3" || arancel != "4" || arancel != "5") {
            Swal.fire({
                icon: 'info',
                title: 'Por favor ingrese una opción válida',
                text: "Puedes consultar el calendario",
                //footer: '<a href="">Calendario</a>'
            })
        };
    })
});




