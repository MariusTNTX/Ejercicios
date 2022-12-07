//_____________________________________________________________________________
// VARIABLES ------------------------------------------------------------------

let texto = document.getElementById("texto"); //--> Caja de Texto
let capa = document.getElementById("capa"); //--> Contenedor de Párrafos
let parrafos = document.getElementsByTagName("P"); //--> Colección HTML con todos los párrafos

//_____________________________________________________________________________
// FUNCIONES ------------------------------------------------------------------

function asignarEventos(){
  for(let p of parrafos){ //Por cada párrafo:
    p.addEventListener("click",(e)=>{ //Al hacer clic únicamente sobre el párrafo: 
      //if(e.srcElement.localName!="input") e.target.style.display="none";
      console.log(e);
      if(e.target.localName!="input"){ 
        let input = e.target.childNodes[1]; //Se almacena el input correspondiente
        if(input.checked) input.checked=false; //Se cambia su estado con cada clic:
        else input.checked=true;
      }
    });
  }
}

//_____________________________________________________________________________
// MAIN -----------------------------------------------------------------------

//Asignar todos los Bordes y Checkbox
for(let p of parrafos){ //Por cada párrafo:
  p.style.border="1px solid black"; //Borde negro
  p.innerHTML+="<input type='checkbox' name='chk'>"; //CheckBox al final
}

//Asignar Eventos al Inicio
asignarEventos();

//Al hacer clic en 'añadir' se añade un párrafo con borde, checkbox y se reinician los eventos:
document.getElementById("boton").addEventListener("click",()=>{
  capa.innerHTML = "<p style='border:1px solid black'>" + texto.value + "<input type='checkbox' name='chk'></p>" + capa.innerHTML;
  asignarEventos();
});