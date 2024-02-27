function redireccionar(url) {
    window.location.href = url;
}// Definimos la frase secreta
const fraseSecreta = "secreto";

// Añadimos un evento de teclado al documento
document.addEventListener("keyup", function(event) {
  // Obtenemos el texto que ha escrito el usuario
  const textoUsuario = event.target.value.toLowerCase();

  // Verificamos si el texto del usuario coincide con la frase secreta
  if (textoUsuario.includes(fraseSecreta)) {
    // Si coincide, redirigimos a la página deseada
    window.location.href = "nuevomodulo.html";
  }
});

const fraseGhost = "ghost";

// Añadimos un evento de teclado al documento
document.addEventListener("keyup", function(event) {
  // Obtenemos el texto que ha escrito el usuario
  const textoUsuario = event.target.value.toLowerCase();

  // Verificamos si el texto del usuario coincide con la frase secreta
  if (textoUsuario.includes(fraseGhost)) {
    // Si coincide, redirigimos a la página deseada
    window.location.href = "https://leobay23.github.io/index.html";
  }
});