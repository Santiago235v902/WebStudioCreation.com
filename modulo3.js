document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector('.animated-image');

    // Función que maneja el evento de desplazamiento (scroll)
    function handleScroll() {
        var scrollPosition = window.scrollY;

        image.style.opacity = 1 - (scrollPosition / 1000);  // Ajusta según sea necesario

    }

    // Agrega el evento de desplazamiento (scroll)
    window.addEventListener('scroll', handleScroll);
});