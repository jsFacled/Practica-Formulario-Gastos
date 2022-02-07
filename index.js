//Capto el formulario
const form = document.getElementById("tForm");

//Escucho el evento al clickear Añadir y le instancio una función:
form.addEventListener("submit", function (event) {
        /*luego de captar el event le indicamos que No recargue la página con preventDefault.*/
  event.preventDefault();
        /* Notar que el submit ocurrió de todos modos. Pero no se envía al servidor. Lo corroboramos con console log. Luego enviaremos al servidor de otra forma, por ejemplo con ajax.*/
     // Ahora obtengo los datos del Formulario:
  let formData = new FormData(form);
     // Convierto en Objeto los datos del Formulario.
  let transactionObj = convertFormDataToTransactionObj(formData);
    /* -- Antes de insertar el objeto en la Tabla lo guardo en el Local Storage con saveTransctionObj() */
  saveTransactionObj(transactionObj)
     // Inserto los datos en la Tabla.
  insertRowInTransactionTable(transactionObj)
 
});
 
function convertFormDataToTransactionObj(formData) {
  let transType = formData.get("type");
  let transDescripcion = formData.get("descripcion");
  let transMonto = formData.get("monto");
  let transCat = formData.get("cat");
  return {
    "transType": transType,
    "transDescripcion": transDescripcion,
    "transMonto": transMonto,
    "transCat": transCat,
  };
}
function insertRowInTransactionTable(transactionObj){
  let tablaRef = document.getElementById("tabla1");
  let newTransactionRowRef = tablaRef.insertRow(-1);
  let newTypeCellRef = newTransactionRowRef.insertCell(0);
  newTypeCellRef.textContent = transactionObj["transType"];
  newTypeCellRef = newTransactionRowRef.insertCell(1);
  newTypeCellRef.textContent =transactionObj["transDescripcion"];
  newTypeCellRef = newTransactionRowRef.insertCell(2);
  newTypeCellRef.textContent = transactionObj["transMonto"];
  newTypeCellRef = newTransactionRowRef.insertCell(3);
  newTypeCellRef.textContent = transactionObj["transCat"];
}

function saveTransactionObj(transactionObj){
  let transactionObjJSON=JSON.stringify(transactionObj);
  localStorage.setItem("transactionData",transactionObjJSON)

}
