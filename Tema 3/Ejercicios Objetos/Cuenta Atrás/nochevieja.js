let nvTime = new Date(2023,0,1,0,0,0);
let restTime, restDate, a, m, d, h, i, s;
let div = document.getElementById("contador");

const tiempoRestante = function(){
  restTime = nvTime.getTime() - new Date().getTime();
  m = Math.floor(restTime/(60*60*24*30));
  restTime -= 60*60*24*30;
  d = Math.floor(restTime/(60*60*24));
  restTime -= 60*60*24;
  h = Math.floor(restTime/(60*60));
  restTime -= 60*60;
  i = Math.floor(restTime/(60));
  restTime -= 60;
  s = restTime;
  div.innerHTML=`<h1>Meses: ${m}<br>Días: ${d}<br>Tiempo: ${h}:${i}:${s}</h1>`;
}

setInterval(tiempoRestante,1000);

//alert(`Resto: ${new Date(nvTime)-new Date()}\nActual: ${new Date()}`);

//1 mes = 30 dias * 24 horas * 60 minutos * 60 segundos