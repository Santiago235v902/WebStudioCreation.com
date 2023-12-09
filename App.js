var modoNoche = false;

function cambiarModo() {
    var cuerpo = document.getElementById("cuerpo");

    // Cambia el modo entre día y noche
    modoNoche = !modoNoche;

    // Aplica la clase 'modo-noche' si es modo noche, de lo contrario, quita la clase
    if (modoNoche) {
        cuerpo.classList.add('modo-noche');
    } else {
        cuerpo.classList.remove('modo-noche');
    }
}



