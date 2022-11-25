let nvTime = new Date(2023,0,1,0,0,0);
let restTime, restDate, a, m, d, h, i, s;
let div = document.getElementById("contador");

setInterval(()=>{
  restTime = nvTime.getTime() - new Date().getTime();
  m = Math.floor(restTime/(1000*60*60*24*30));
  d = Math.floor(restTime/(1000*60*60*24))-m*30;
  h = Math.floor(restTime/(1000*60*60))-m*30*24-d*24;
  i = Math.floor(restTime/(1000*60))-m*30*24*60-d*24*60-h*60;
  s = Math.floor(restTime/(1000))-m*30*24*60*60-d*24*60*60-h*60*60-m*60;
  div.innerHTML=`<h1>Meses: ${m}<br>Días: ${d}<br>Tiempo: ${h}:${i}:${s}</h1>`;
},1000);