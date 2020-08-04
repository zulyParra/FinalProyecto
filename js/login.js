const FORMULARIO = document.getElementById('form-login');

let mensajeAlerta = document.getElementById('mensaje-alerta');

function cancelarEvento(event) {
    event.preventDefault();
}

FORMULARIO.addEventListener('submit', cancelarEvento);

FORMULARIO.addEventListener('submit', function() {
    let email = FORMULARIO['email'].value;
    let password = FORMULARIO['password'].value;
    let emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    let passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let conectado = FORMULARIO['conectado'].checked;

    let mensajeError = '';
    let validacion = true;

    let userData = JSON.parse(localStorage.getItem('DatosDeUsuario'));
    emailDefault = userData.email;
    passDefault = userData.password;


    if (emailValidation.test(email) == false) {
        mensajeError += 'Formato de correo inválido';
        mensajeError += '<br>'
        validacion = false;
    } else if (passwordValidation.test(password) == false) {
        mensajeError += 'La contraseña debe tener al entre 8 y 16 caracteres, ' +
            'al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos';
        mensajeError += '<br>'
        validacion = false;
    } else if (email == "") {
        mensajeError += 'Este campo no puede estar vacío';
        mensajeError += '<br>'
        validacion = false;
    } else if (password == "") {
        mensajeError += 'Este campo no puede estar vacío'
        mensajeError += '<br>'
        validacion = false;
    } else if ((password != passDefault) && (email != emailDefault)) {
        mensajeError += 'Datos incorrectos'
        mensajeError += '<br>'
        validacion = false;
    } else {
        validacion = true;
    }

    if (validacion == false) {
        mensajeAlerta.hidden = false;
        mensajeAlerta.innerHTML = mensajeError;
    } else {
        mensajeAlerta.hidden = true;
        window.location.href = 'index2.html'
    }

});
