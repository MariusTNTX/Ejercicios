let imagen = document.getElementById("imagen");
let botonM = document.getElementById("mostrar");
let botonO = document.getElementById("ocultar");

botonM.addEventListener("click",()=>{
    imagen.style.display="inline-block";
});

botonO.addEventListener("click",()=>{
    imagen.style.display="none";
});