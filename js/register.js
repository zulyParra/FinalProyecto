const FORMULARIO = document.getElementById('form-register');

let mensajeAlerta = document.getElementById('mensaje-alerta');

function cancelarEvento(event) {
    event.preventDefault();
}

FORMULARIO.addEventListener('submit', cancelarEvento);

FORMULARIO.addEventListener('submit', function() {

    let nombre = FORMULARIO['nombre'].value;
    let email = FORMULARIO['email'].value;
    let password = FORMULARIO['password'].value;
    let password2 = FORMULARIO['password2'].value;
    let emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    let passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let notificaciones = FORMULARIO['notificaciones'].checked;

    let mensajeError = '';
    let validacion = true;

    if ((nombre.lenght < 6)) {
        mensajeError += 'El nombre debe tener más de seis caracteres';
        mensajeError += '<br>'
        validacion = false;
    } else if (emailValidation.test(email) == false) {
        mensajeError += 'Formato de correo inválido';
        mensajeError += '<br>'
        validacion = false;
    } else if (passwordValidation.test(password) == false) {
        mensajeError += 'La contraseña debe tener mínimo 8 caracteres, ' +
            'al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener caracteres especiales';
        mensajeError += '<br>'
        validacion = false;
    } else if (password2 != password) {
        mensajeError += 'Las contraseñas no coinciden';
        mensajeError += '<br>'
        validacion = false;
    } else {
        validacion = true;
    }

    if (validacion == false) {
        mensajeAlerta.hidden = false;
        mensajeAlerta.innerHTML = mensajeError;

    } else {
        let datos = {
            nombre,
            email,
            password
        };
        localStorage.setItem("DatosDeUsuario", JSON.stringify(datos));
        mensajeAlerta.hidden = true;
        window.location.href = 'login.html'
    }



});

const ICONO = document.getElementById('icono')
ICONO.addEventListener('click', function() {
    let passwordInput = FORMULARIO['password']
    if (passwordInput.type == "password") {
        passwordInput.type = "text"
        ICONO.classList.replace("fa-lock", "fa-unlock")
    } else {
        passwordInput.type = "password"
        ICONO.classList.replace("fa-unlock", "fa-lock")
    }
})
const ICONO2 = document.getElementById('icono2')
ICONO2.addEventListener('click', function() {
    let passwordInput2 = FORMULARIO['password2']
    if (passwordInput2.type == "password") {
        passwordInput2.type = "text"
        ICONO2.classList.replace("fa-lock", "fa-unlock")
    } else {
        passwordInput2.type = "password"
        ICONO2.classList.replace("fa-unlock", "fa-lock")
    }
})
