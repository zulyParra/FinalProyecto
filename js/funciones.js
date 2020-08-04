//valores de los elemetos del alert y el formulario en html que se usaran en las validaciones
const aletarMensaje = document.getElementById("mensaje-error");
const formularioContcatenos = document.getElementById("Form-contactenos");
let emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
//funcion para restringir el evento de envio de formulario
function cancelarEvento(event) {
  event.preventDefault();
}
formularioContcatenos.addEventListener("submit", cancelarEvento);
//funcion para enviar los datos del formulario
formularioContcatenos.addEventListener("submit", function () {
  let validado = true;
  let mensajeError = "";
  //capturar la informacion de los inputs del fomulario
  let inputUserName = formularioContcatenos["nombre"].value;

  let inputEmail = formularioContcatenos["email"].value;

  let inputMensaje = formularioContcatenos["mensaje"].value;
  // realizar la validacion que los campos esten vacios
  if (inputUserName == "") {
    validado = false;
    mensajeError += ">El campo de nombre no puede estar vacio";
    mensajeError += "<br>";
  } else if (inputEmail == "") {
    validado = false;
    mensajeError += ">El campo de email no puede estar vacio";
    mensajeError += "<br>";
  } else if (inputMensaje == "") {
    validado = false;
    console.log("entro mensake vacio");
    mensajeError += ">El campo de mensaje no puede estar vacio";
    mensajeError += "<br>";
  } else if (emailValidation.test(inputEmail) == false) {
    validado = false;
    console.log("entro email validacion");
    mensajeError +=
      " - Su email no tiene el formato correcto, el formato correcto es example@example.com";
    mensajeError += "<br>";
  } else {
    validado = true;
  }
  // mostar los mensajes de error en componente de alerta de bootstrap o de lo contrario un mensaje de exito en el envio
  formularioContcatenos.classList.remove("form-validation");
  if (validado == false) {
    if (aletarMensaje.classList.contains("alert-success")) {
      aletarMensaje.classList.replace("alert-success", "alert-danger");
    }
    formularioContcatenos.classList.add("form-validation");
    aletarMensaje.hidden = false;
    aletarMensaje.innerHTML = mensajeError;
    aletarMensaje.hidden = false;
  } else {
    let datos = {
      inputUserName,
      inputEmail,
      inputMensaje,
    };
    localStorage.setItem("mensajeContactenos", JSON.stringify(datos));
    aletarMensaje.hidden = false;
    aletarMensaje.classList.replace("alert-danger", "alert-success");
    formularioContcatenos.reset();
    aletarMensaje.innerHTML = "Su mensaje fue enviado corretamente";
  }
});
