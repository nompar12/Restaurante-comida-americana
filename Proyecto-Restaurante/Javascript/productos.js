function validarInicioSesion() {
    var direccion = document.getElementById("direccion").value;
    var contrasena = document.getElementById("contrasena").value;


    if (direccion === "usuario@example.com" && contrasena === "contraseña") {

        window.location.href = "pagocorrecto.html";

    } else if (direccion === "nompar89@gmail.com" && contrasena === "Alejo821") {

        window.location.href = "pagocorrecto.html";

    } else if (direccion === "padre@hotmail.com" && contrasena === "Alejo821") {

        window.location.href = "pagocorrecto.html";

    } else if (direccion === "Alejogomez@hotmail.com" && contrasena === "AlejoGomez") {

        window.location.href = "pagocorrecto.html";

    } else if (direccion === "JoseGabriel@hotmail.com" && contrasena === "Josegabo") {

        window.location.href = "pagocorrecto.html";

    } else if (direccion === "correo2@example.com" && contrasena === "contrasena2") {

        window.location.href = "pagocorrecto.html";

    } else if (direccion === "correo3@example.com" && contrasena === "contrasena3") {

        window.location.href = "pagocorrecto.html";

    } else {

        window.location.href = "pago_incorrecto.html";

    }
}