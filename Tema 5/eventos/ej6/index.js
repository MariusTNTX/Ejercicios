/* Verificar carga de la página */
window.addEventListener("load",()=>{
  
  /* Cambiar imagen según el tipo de incidencia */
  let tipoInc = document.getElementById("tipo");
  let imagen = document.getElementById("imagen");
  tipoInc.addEventListener("change",()=>{
    imagen.src="imagenes/"+tipoInc.value+".jpg";
  });

  /* Mostrar Descripción */
  let mostrarDes = document.getElementById("mostrarDescripcion");
  let areaDes = document.getElementById("fDescripcion");
  mostrarDes.addEventListener("click",()=>{
    mostrarDes.style.display='none';
    areaDes.style.display='inline-block';
  });

  /* Gestión del submit */
  document.getElementById("formulario").addEventListener("submit",(e)=>{
    let serie = document.getElementById("serie");
    let label = document.getElementById("labelSerie");
    let regExp = new RegExp(/^\d{3}[A-Z]{4}[12A]$/);
    if(!regExp.test(serie.value)){
      e.preventDefault();
      document.getElementById("capaError").innerHTML="Código de número de serie erróneo";
      label.classList.add("error");
      serie.classList.add("error");
    }
  });
});