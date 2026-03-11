// script.js

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" || motivo === "" || correo === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario enviado correctamente!";
        mensaje.style.color = "green";
        // Aquí podrías agregar envío real a un servidor
        this.reset();
    }
});