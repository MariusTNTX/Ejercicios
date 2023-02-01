//Cuando se hayan cargado los elementos HTML y CSS:
window.addEventListener("load",()=>{

  //Elementos a usar del DOM:
  var codigo = document.getElementById("codigo");
  var localidades = document.getElementsByTagName("select")[0];
  var nombre = document.getElementById("nombre");
  var agregarCurso = document.getElementById("agregarCurso");
  var limpiarCursos = document.getElementById("limpiarCursos");
  var borrarCursos = document.getElementById("borrarCursos");
  var borrarCookies = document.getElementById("borrarCookies");
  var grabarCookies = document.getElementById("grabarCookies");

  //Funciones de validación
  var validarNombre = ()=>{
    if(nombre.value.length==0) return false;
    return true;
  }
  var validarCodigo = ()=>{
    let regExp = new RegExp(/^(10|20|30)[A-ZÁÉÍÓÚ]{1}\.\d{4}[A-Za-z]{1}/);
    if(regExp.test(codigo.value)) return true;
    return false;
  }

  //Eventos sobre texto nombre
  nombre.addEventListener("keyup",()=>{
    nombre.value = nombre.value.toUpperCase();
  });
  nombre.addEventListener("blur",()=>{
    if(!validarNombre()) nombre.classList.add("fallo");
    else {
      nombre.classList.remove("fallo");
      agregarCurso.dispatchEvent(new Event("click"));
    }
  });

  //Eventos sobre texto código
  codigo.addEventListener("blur",()=>{
    if(!validarCodigo()) codigo.style.color='red';
    else {
      codigo.style.color='black';
      agregarCurso.dispatchEvent(new Event("click"));
    }
  });

  //Botón agregar curso
  agregarCurso.addEventListener("click",(e)=>{
    //Si supera el tamaño de la pantalla
    if(window.scrollY>0){
      alert("No se pueden agregar más cursos");
      e.preventDefault();
    //Si no lo supera
    } else {
      //Validación
      let valido = true;
      if(!validarNombre()) valido=false;
      if(!validarCodigo()) valido=false;
      if(valido){
        //Si es válido se añade la nueva fila
        let tabla = document.getElementById("tablaCursos");
        let localidad = document.getElementsByTagName("option")[localidades.selectedIndex];
        tabla.innerHTML+=`
        <tr draggable="true">
          <td><input type="checkbox" /></td>
          <td>${codigo.value.substring(0,2)}</td>
          <td>${nombre.value}</td>
          <td>${localidad.textContent}</td>
        </tr>`;
        //Se añaden eventos click y dragstart a todas sus filas:
        for(let tr of document.getElementsByTagName("tr")){
          tr.addEventListener("click",(e)=>{
            if(e.target.localName!='input'){
              let input = tr.querySelector("input[type='checkbox']");
              if(input.checked==false) input.setAttribute("checked","true");
              else input.removeAttribute("checked");
            } 
          });
          tr.addEventListener("dragstart",()=>{fila = tr;});
        }
      }
    }
  });

  //Botón Deseleccionar todo
  limpiarCursos.addEventListener("click",()=>{ 
    let inputs = document.querySelectorAll("input[type='checkbox']");
    for(let inp of inputs){
      inp.removeAttribute("checked");
      inp.checked==false;
    }
  });

  //Boton borrar cursos
  borrarCursos.addEventListener("click",()=>{ 
    let inputs = document.querySelectorAll("input[type='checkbox']");
    for(let inp of inputs){
      if(inp.getAttribute("checked")=='true' || inp.checked==true){
        document.getElementById("tablaCursos").removeChild(inp.parentElement.parentElement);
      }
    }
  });

  //Fila arrastrada
  let fila;

  //Se previene el evento dragover para poder hacer drop
  document.getElementsByTagName("img")[0].addEventListener("dragover",(e)=>{e.preventDefault();});

  //Evento drop sobre la papelera
  document.getElementsByTagName("img")[0].addEventListener("drop",()=>{
    document.getElementById("tablaCursos").removeChild(fila);
  });

  //Boton guardar cursos
  grabarCookies.addEventListener("click",(e)=>{
    e.preventDefault();
    asignarCookie();
  });

  //Boton borrar cursos
  borrarCookies.addEventListener("click",(e)=>{
    e.preventDefault();
    borrarCookie();
  });

});