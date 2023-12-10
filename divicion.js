function cargarContenido(url) {
    const contenido = document.getElementById('contenido');
    const fullPath = window.location.href.replace(/\/[^/]*$/, "/" + url);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contenido.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', fullPath, true);
    xhr.send();
}
