document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector('.animated-image');

    // Función que maneja el evento de desplazamiento (scroll)
    function handleScroll() {
        var scrollPosition = window.scrollY;

        // Ajusta la opacidad de la imagen en función de la posición de desplazamiento
        image.style.opacity = 1 - (scrollPosition / 500);
    }

    // Agrega el evento de desplazamiento (scroll)
    window.addEventListener('scroll', handleScroll);
});