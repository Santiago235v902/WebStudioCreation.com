document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario ya está registrado al cargar la página
    if (getCookie("registered")) {
        window.location.href = 'VS 2/index.html';        // Redirigir a la página siguiente si está registrado
    }

    // Event listener para el botón de registro
    document.getElementById('register-btn').addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (password.length < 8) {
            document.getElementById('error-message').innerText = 'La contraseña debe tener al menos 8 caracteres.';
            return;
        }

        // Aquí puedes agregar más validaciones según tus requisitos.

        // Redirigir si las barras están llenas (solo como ejemplo, puedes ajustar las condiciones según tus necesidades).
        if (document.querySelector('.progress-bar-fill').style.width === '100%') {
            // Setear una cookie para marcar al usuario como registrado
            setCookie("registered", true, 30); // Expira en 30 días
            window.location.href = 'VS 2/index.html';            // Redirigir a la página siguiente después de registrarse
        } else {
            document.getElementById('error-message').innerText = 'Las barras no están llenas.';
        }
    });

    // Esta función es solo un ejemplo de cómo puedes verificar la fortaleza de la contraseña y actualizar la barra de progreso.
    document.getElementById('password').addEventListener('input', function() {
        var password = this.value;
        var strength = 0;

        // Ejemplo de verificación de la fortaleza de la contraseña (puedes ajustarlo según tus requisitos).
        if (password.match(/[a-z]+/)) {
            strength += 1;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
        if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]+/)) {
            strength += 1;
        }

        // Actualizar la barra de progreso.
        var progressBarFill = document.querySelector('.progress-bar-fill');
        if (strength === 4) {
            progressBarFill.style.backgroundColor = '#4caf50';
            progressBarFill.style.width = '100%';
        } else {
            progressBarFill.style.backgroundColor = '#ff9800';
            progressBarFill.style.width = (strength * 25) + '%';
        }
    });

    // Function para setear una cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function para obtener una cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }
});
