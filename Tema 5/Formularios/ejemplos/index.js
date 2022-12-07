let form1 = document.getElementById("formulario1");
let formularios = document.getElementsByTagName("form");
let form2 = formularios[1];

let b = document.getElementById("boton");
b.addEventListener("click",()=>{
  console.log("Has pulsado el botón");
});

let ciudad = document.getElementById("ciudad");
form2.addEventListener("submit",(event)=>{
  if(ciudad.value!="Cuenca"){
    event.preventDefault();
    alert("No has puesto 'Cuenca'");
  }
});