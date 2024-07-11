$(document).ready(function() {
    // Calcular edad
    $('#fechaNacimiento').on('change', function() {
        let fechaNacimiento = new Date($(this).val());
        let hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        $('#edad').val(edad);
    });

    // Mostrar/ocultar detalle de enfermedades
    $('#enfermedades').on('change', function() {
        if ($(this).val() === 'si') {
            $('#detalleEnfermedades').show();
        } else {
            $('#detalleEnfermedades').hide();
            $('#tipoEnfermedad').val('');
        }
    });

    // Validación del usuario
    $('#usuario').on('input', function() {
        let usuario = $(this).val();
        let regex = /^[a-zA-Z0-9_]+$/;
        if (!regex.test(usuario)) {
            alert('El usuario no debe contener caracteres extraños.');
            $(this).val('');
        }
    });

    // Validación de contraseñas
    $('#registroForm').on('submit', function(event) {
        let contrasena = $('#contrasena').val();
        let confirmarContrasena = $('#confirmarContrasena').val();

        if (contrasena !== confirmarContrasena) {
            alert('Las contraseñas no coinciden.');
            event.preventDefault();
        } else {
            let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regex.test(contrasena)) {
                alert('La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.');
                event.preventDefault();
            }
        }
    });
});