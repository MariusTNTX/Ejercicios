let crono = document.getElementById("txtCrono");
let iniciar = document.getElementById("btnStart");
let parar = document.getElementById("btnStop");
let reset = document.getElementById("btnRestart");
let intervalo;
let tiempo=0;

function tiempoFormateado(ti){
  let t = ti.getHours()-1;
  let h = (t<10) ? '0'+ t : t;
  t = ti.getMinutes();
  let m = (t<10) ? '0'+ t : t;
  t = ti.getSeconds();
  let s = (t<10) ? '0'+ t : t;
  t = Math.floor(ti.getMilliseconds()/10);
  let l = (t<10) ? '0'+ t : t;
  return `${h}:${m}:${s}:${l}`;
}

crono.value = "00:00:00:00";

iniciar.addEventListener("click",()=>{
  let tiempoIni = (tiempo==0) ? new Date().getTime() : new Date().getTime() - tiempo;
  intervalo = setInterval(() => {
    tiempo = new Date(new Date().getTime() - tiempoIni);
    crono.value = tiempoFormateado(tiempo);
  }, 10);
});

parar.addEventListener("click",()=>{
  clearInterval(intervalo);
});

reset.addEventListener("click",()=>{
  clearInterval(intervalo);
  tiempo=0;
  crono.value = "00:00:00:00";
});