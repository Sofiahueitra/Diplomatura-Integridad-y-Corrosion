function toggleModulo(elemento) {
    const contenido = elemento.querySelector('.contenido-modulo');
    const icono = elemento.querySelector('.icono');

    const abierto = contenido.style.display === "block";

    if (abierto) {
        contenido.style.display = "none";
        elemento.classList.remove("abierto");
    } else {
        contenido.style.display = "block";
        elemento.classList.add("abierto");
    }
}

function toggleBibliografia() {
    const content = document.getElementById("biblioContent");
    const icon = document.getElementById("biblio-icon");

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
    } else {
        content.style.display = "block";
        icon.textContent = "–";
    }
}
