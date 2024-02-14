// Variables para almacenar la posición actual del jugador (Pac-Man)
var pacmanX = 0;
var pacmanY = 0;

// Variable para almacenar la puntuación
var score = 0;

// Función para mover al jugador
function moverPacman(x, y) {
    pacman.style.left = x + "px";
    pacman.style.top = y + "px";
}

// Variable para almacenar el número total de esferas
var totalEsferas = 5;

// Función para reubicar las esferas
function reubicarEsferas() {
    // Eliminar todas las esferas existentes
    var balls = document.getElementsByClassName("ball");
    while (balls.length > 0) {
        balls[0].parentNode.removeChild(balls[0]);
    }

    // Crear cinco nuevas esferas en ubicaciones aleatorias
    for (var i = 0; i < totalEsferas; i++) {
        var randomX = Math.floor(Math.random() * (window.innerWidth - 50)); // Generar una posición aleatoria en el eje X
        var randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // Generar una posición aleatoria en el eje Y

        var ball = document.createElement("div");
        ball.className = "ball";
        ball.style.top = randomY + "px";
        ball.style.left = randomX + "px";
        document.getElementById("game-container").appendChild(ball);
    }
}



// Función para detectar colisiones entre el jugador y las esferas
function detectarColisionJugadorEsfera() {
    // Obtener las coordenadas del jugador
    var pacmanRect = pacman.getBoundingClientRect();
    
    // Obtener referencias a todas las esferas
    var balls = document.getElementsByClassName("ball");
    
    // Variable para mantener un registro de si se ha eliminado una esfera
    var esferaEliminada = false;
    
    // Recorrer todas las esferas
    for (var i = 0; i < balls.length; i++) {
        // Obtener las coordenadas de la esfera actual
        var ballRect = balls[i].getBoundingClientRect();
        
        // Comprobar si hay colisión entre el jugador y la esfera actual
        if (pacmanRect.left < ballRect.right && pacmanRect.right > ballRect.left && pacmanRect.top < ballRect.bottom && pacmanRect.bottom > ballRect.top) {
            // Si hay colisión con la esfera actual, aumentar el puntaje
            score += 1;
            document.getElementById("score-value").textContent = score;
            
            // Eliminar la esfera actual del DOM
            balls[i].remove();
            
            // Establecer la variable de esfera eliminada a true
            esferaEliminada = true;
        }
    }
    
    // Si se ha eliminado una esfera y no quedan más esferas, reubicar las esferas
    if (esferaEliminada && balls.length === 0) {
        reubicarEsferas();
    }
}
// Función para reubicar las esferas
function reubicarEsferas() {
    // Eliminar todas las esferas existentes
    var balls = document.getElementsByClassName("ball");
    while (balls.length > 0) {
        balls[0].remove();
    }

    // Establecer el margen máximo para la aparición de las esferas
    var margenMaximo = 10;

    // Volver a crear cinco nuevas esferas en ubicaciones aleatorias dentro del margen máximo
    for (var i = 0; i < 5; i++) {
        var randomX = Math.random() * (window.innerWidth - margenMaximo * 2) + margenMaximo; // Generar una posición aleatoria en el eje X dentro del margen máximo
        var randomY = Math.random() * (window.innerHeight - margenMaximo * 2) + margenMaximo; // Generar una posición aleatoria en el eje Y dentro del margen máximo

        var ball = document.createElement("div");
        ball.className = "ball";
        ball.style.top = randomY + "px";
        ball.style.left = randomX + "px";
        document.getElementById("game-container").appendChild(ball);
    }
}

// Llamar a la función para reubicar las esferas al inicio del juego
reubicarEsferas();

// Agregar un evento de escucha para las teclas de flecha
document.addEventListener("keydown", function(event) {
    // Obtener el código de la tecla presionada
    var teclaPresionada = event.keyCode;
    
    // Mover el jugador en función de la tecla presionada
    switch(teclaPresionada) {
        case 37: // Flecha izquierda
            pacmanX -= 10;
            moverPacman(pacmanX, pacmanY);
            detectarColisionJugadorEsfera(); // Detectar colisión después de mover al jugador
            break;
        case 38: // Flecha arriba
            pacmanY -= 10;
            moverPacman(pacmanX, pacmanY);
            detectarColisionJugadorEsfera(); // Detectar colisión después de mover al jugador
            break;
        case 39: // Flecha derecha
            pacmanX += 10;
            moverPacman(pacmanX, pacmanY);
            detectarColisionJugadorEsfera(); // Detectar colisión después de mover al jugador
            break;
        case 40: // Flecha abajo
            pacmanY += 10;
            moverPacman(pacmanX, pacmanY);
            detectarColisionJugadorEsfera(); // Detectar colisión después de mover al jugador
            break;
    }
});
function redireccionar(url) {
    window.location.href = url;
}
 
document.addEventListener('DOMContentLoaded', function () {
    const pacman = document.getElementById('pacman');
    const enemy = document.getElementById('enemy');
    const scoreValue = document.getElementById('score-value');

    let score = 0;

    // Función para mover el enemigo hacia el Pacman
    function moveEnemy() {
        if (score >= 3) {
            const step = 2; // Tamaño del paso del enemigo

            // Obtener las posiciones actuales del Pacman y el enemigo
            let pacmanRect = pacman.getBoundingClientRect();
            let enemyRect = enemy.getBoundingClientRect();

            // Calcular la dirección hacia la que debe moverse el enemigo
            let dx = pacmanRect.left - enemyRect.left;
            let dy = pacmanRect.top - enemyRect.top;

            // Mover al enemigo hacia el Pacman en función de la dirección calculada
            enemy.style.left = (enemyRect.left + step * Math.sign(dx)) + 'px';
            enemy.style.top = (enemyRect.top + step * Math.sign(dy)) + 'px';
        }
    }

    // Llamar a la función moveEnemy() periódicamente para que el enemigo siga al Pacman
    setInterval(moveEnemy, 100); // Ajusta el intervalo según la velocidad deseada del enemigo

    // Función para verificar la puntuación y mostrar al enemigo cuando sea necesario
    function checkScore() {
        score = parseInt(scoreValue.innerText);
        if (score >= 3) {
            enemy.style.display = 'block'; // Mostrar al enemigo cuando la puntuación alcanza 3 puntos
        }
    }

    // Llamar a la función checkScore() para verificar la puntuación inicialmente
    checkScore();
});
