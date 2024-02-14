<?php
// Conexión a la base de datos (debes configurar esto con tus propios datos)
$conexion = new mysqli("localhost", "usuario", "contraseña", "basededatos");

// Verificar si la conexión fue exitosa
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Verificar si se recibió un comentario a través de una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['commentText'])) {
    $commentText = $conexion->real_escape_string($_POST['commentText']);

    // Insertar el comentario en la base de datos
    $sql = "INSERT INTO comentarios (texto) VALUES ('$commentText')";
    if ($conexion->query($sql) === TRUE) {
        echo "Comentario guardado correctamente.";
    } else {
        echo "Error al guardar el comentario: " . $conexion->error;
    }
} else {
    echo "No se ha proporcionado ningún comentario.";
}

// Cerrar la conexión a la base de datos
$conexion->close();
?>
