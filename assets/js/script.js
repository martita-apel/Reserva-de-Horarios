// Validar Formulario
document.getElementById("boton").addEventListener("click", function(e) {
  var rut = document.getElementById("rut").value;
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var especialidad = document.getElementById("especia").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;
  var ok = true;

  // Validar rut
  // const rutval = /[0-9]+[-|‐]{1}[0-9kK]{1}$/gi;
  // const rutval = /^(\d{1}|\d{2})\.(\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
  const rutval = /\b\d{1,8}\-[K|k|0-9]/;
  if (!rut.match(rutval)) {
    alert("Tu rut está mal escrito.");
    ok = false;
    return false;
  }

  // Validar Nombre y apellidos
  const nom = /[a-zA-Z]/gim;
  if (!nombre.match(nom)) {
    alert("Tu nombre no es válido.");
    ok = false;
    return false;
  }

  // Validar Apellidos
  const apel = /[a-zA-Z]/gim;
  if (!apel.test(apellidos)) {
    alert("Tus apellidos no son válidos.");
    ok = false;
    return false;
  }

  // Validar edad
  if (!isNaN(edad)) {
    alert("Tu edad no es válida.");
    ok = false;
    return false;
  }

  // Validar email
  const correo = /\w+@\w+\.+[a-z]/;
  if (!correo.test(email)) {
    alert("Tu correo no es válido");
    ok = false;
    return false;
  }

  // Validar fecha
  // const formato = /(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d)/;
  const formato = /\d{1,2}\-\d{1,2}\-\d{2,4}$/;
  if (!fecha.match(formato)) {
    alert("Tu fecha está mal ingresada.");
    ok = false;
    return false;
  }

  //Validación Form
  if (
    rut == "" ||
    nombre == "" ||
    apellidos == "" ||
    email == "" ||
    fecha == ""
  ) {
    alert(
      "Debes ingresar todos los datos requeridos para completar la reserva exitosamente."
    );
    ok = false;
    return false;
  }

  var confirm =
    "Estimado(a) " +
    nombre +
    " " +
    apellidos +
    ", su hora para " +
    especialidad +
    " ha sido reservada para el día " +
    fecha +
    " a las " +
    hora +
    "." +
    "<br>" +
    "Además, se le envió un mensaje a su correo " +
    email +
    " con el detalle de su cita." +
    "<br>" +
    "Gracias por preferirnos.";
  if (ok) {
    document.getElementById("form__confirmacion").innerHTML += confirm;
  }
});
