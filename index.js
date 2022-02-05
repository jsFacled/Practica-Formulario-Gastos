//Capto el formulario
const form = document.getElementById("tForm");

//Escucho el evento al clickear Añadir y le instancio una función:
form.addEventListener("submit", function (event) {
  /*luego de captar el event le indicamos que No recargue la página con preventDefault.*/
  event.preventDefault();
  /* Notar que el submit ocurrió de todos modos. Pero no se envía al servidor. Lo corroboramos con console log. Luego enviaremos al servidor de otra forma, por ejemplo con ajax.*/
  let formData = new FormData(form);
  let tablaRef = document.getElementById("tabla1");
  let newTransactionRowRef = tablaRef.insertRow(-1);

  let newTypeCellRef = newTransactionRowRef.insertCell(0);
  newTypeCellRef.textContent = formData.get("type");
  newTypeCellRef = newTransactionRowRef.insertCell(1);
  newTypeCellRef.textContent = formData.get("descripcion");
  newTypeCellRef = newTransactionRowRef.insertCell(2);
  newTypeCellRef.textContent = formData.get("monto");
  newTypeCellRef = newTransactionRowRef.insertCell(3);
  newTypeCellRef.textContent = formData.get("cat");
});
