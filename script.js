
const boton = document.getElementById("boton-aprender");
const mensaje = document.getElementById("mensaje");

const comandos = [
    "git init: Inicializa un repositorio.",
    "git add .: Prepara los archivos.",
    "git commit: Guarda los cambios.",
    "git status: Muestra el estado.",
    "git push: Sube cambios a GitHub."
];

let posicion = 0;

boton.addEventListener("click", function() {
    mensaje.textContent = comandos[posicion];

    mensaje.style.color = "#2563eb";
    mensaje.style.fontWeight = "bold";

    posicion = (posicion + 1) % comandos.length;
});
