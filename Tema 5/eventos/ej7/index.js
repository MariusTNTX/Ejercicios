let imgVisor = document.getElementById("ImagenVisor");
let titulo = document.getElementById("titulo");

function mostrarImagen(num){
  imgVisor.src = "imagenes/foto"+num+".jpg";
  titulo.innerHTML = document.getElementById("Imagen"+num).alt;
}

window.addEventListener("load",()=>{
  for(let i=1; i<=8; i++){
    document.getElementById("Imagen"+i).addEventListener("click",(e)=>{
      mostrarImagen(e.target.id.substr(-1));
    });
  }
});