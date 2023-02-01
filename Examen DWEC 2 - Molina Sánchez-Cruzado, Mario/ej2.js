//Cuando estén cargados solo los elementos HTML
window.addEventListener("DOMContentLoaded",()=>{

  //Elementos a usar del DOM:
  var localidadNueva = document.getElementById("localidadNueva");
  var agregarLocalidad = document.getElementById("agregarLocalidad");
  var borrarLocalidad = document.getElementById("borrarLocalidad");
  var localidades = document.getElementsByTagName("select")[0];

  //Se leen y se introducen automáticamente las cookies en los campos al cargar el HTML
  leerCookie();

  //Al hacer clic en agregar localidad se añadira un nuevo option al select
  agregarLocalidad.addEventListener("click",()=>{
    let option = document.createElement("option");
    option.textContent=localidadNueva.value;
    localidades.appendChild(option);
    localidadNueva.value='';
    //Al agregar una localidad se activa o reactiva el EventListener sobre el botón borrar
    borrarLocalidad.addEventListener("click",borrarLoc);
  });

  //Se crea una función anónima para poder borrar el evento en caso de ser necesario
  var borrarLoc = ()=>{
    if(document.getElementsByTagName("option").length>1){
      let index = localidades.selectedIndex;
      let seleccion = document.getElementsByTagName("option")[index];
      localidades.removeChild(seleccion);
    }
    if(document.getElementsByTagName("option").length==1){
      borrarLocalidad.removeEventListener("click",borrarLoc);
    }
  }
  //Al hacer clic en borrar localidad se eliminará el option correspondiente en el select
  borrarLocalidad.addEventListener("click",borrarLoc);
});