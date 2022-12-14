/*let teclas = [], times = [];

 document.body.addEventListener("keyup",(e)=>{
  //SI LA TECLA ES ALT O F12:
  if(e.key=="F12" || e.key=="Alt"){
    //Si no está almacenada añade la tecla
    if(!teclas.includes(e.key)) teclas.push(e.key);
    //Se actualiza su time
    times[e.key] = new Date().getTime();
    //SI HAY DOS TECLAS ALMACENADAS: 
    if(teclas.length==2){
      //Si la diferencia de tiempo es inferior a 300 milisegundos se activa el comando
      if(Math.abs(times['F12']-times['Alt'])<300) document.getElementById("img").innerHTML+=`<img src='./logoCIFP.png' alt='Logo CIFP'>`;
      //Se eliminan las teclas
      teclas = [];
    }
  }
}); */

let url = 'https://source.unsplash.com/random', img = './logoCIFP.png';

document.body.addEventListener("keyup",(e)=>{
  if(e.altKey && e.key=="F12"){
    //document.getElementById("img").innerHTML+=`<img src=${url} alt='Logo CIFP'>`;
    document.getElementById("img").style.backgroundImage = `url(${url})`;
  }
});

document.getElementById("boton1").addEventListener("click",()=>{
  document.body.style.backgroundColor = "red";
});

document.getElementById("boton2").addEventListener("click",()=>{
  let miEvento = new Event("click");
  document.getElementById("boton1").dispatchEvent(miEvento);
});


//Cancelar evento submit hasta que se presione la tecla hacia abajo

let allowSubmit = false;

document.getElementById("miFormulario").addEventListener("submit",(e)=>{
  if(!allowSubmit) e.preventDefault();
});

document.body.addEventListener("keydown",(e)=>{
  if(e.key == 'ArrowDown'){
    allowSubmit = true;
    document.getElementById("miFormulario").dispatchEvent(new Event("submit"));
  }
});

document.getElementById("miCheckbox").addEventListener("click",(e)=>{
  
});