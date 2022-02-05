//Capto el formulario
const form = document.getElementById("tForm");

//Escucho el evento al clickear Añadir y le instancio una función:
form.addEventListener("submit", function (event) {
  /*luego de captar el event le indicamos que No recargue la página con preventDefault.*/
  event.preventDefault();
  /* Notar que el submit ocurrió de todos modos. Pero no se envía al servidor. Lo corroboramos con console log. Luego enviaremos al servidor de otra forma, por ejemplo con ajax.*/
  let formData = new FormData(form);
});




