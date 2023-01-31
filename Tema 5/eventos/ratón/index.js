//_____________________________________________________________________________
// VARIABLES ------------------------------------------------------------------

let texto = document.getElementById("texto"); //--> Caja de Texto
let capa = document.getElementById("capa"); //--> Contenedor de Párrafos
let parrafos = document.getElementsByTagName("P"); //--> Colección HTML con todos los párrafos

//_____________________________________________________________________________
// FUNCIONES ------------------------------------------------------------------

function asignarEventos(){
  for(let p of parrafos){ //Por cada párrafo:
    //Al hacer clic únicamente sobre el párrafo:
    p.addEventListener("click",(e)=>{
      //Se almacena el input correspondiente y se cambia su estado con cada clic:
      if(e.target.localName!="input"){ 
        let input = e.target.childNodes[1]; 
        if(input.checked) input.checked=false;
        else input.checked=true;
      }
    });
  }
}

//_____________________________________________________________________________
// MAIN -----------------------------------------------------------------------

//Asignar todos los Bordes y Checkbox
for(let p of parrafos){ //Por cada párrafo:
  p.style.border="1px solid black";
  p.innerHTML+="<input type='checkbox' name='chk'>";
}

//Asignar Eventos al Inicio
asignarEventos();

//Al hacer clic en 'añadir' se añade un párrafo con borde, checkbox y se reinician todos los eventos:
document.getElementById("boton").addEventListener("click",()=>{
  capa.innerHTML = "<p style='border:1px solid black'>" + texto.value + "<input type='checkbox' name='chk'></p>" + capa.innerHTML;
  asignarEventos();
});

/*let caja = document.getElementById("hola");

 document.body.addEventListener("mousemove",(e)=>{
  caja.style.left = e.clientX-50+"px";
  caja.style.top = e.clientY-10+"px";
}); */