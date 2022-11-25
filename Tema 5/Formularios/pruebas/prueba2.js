const [pre,post,submit,anio,mes,title,calendar] = [
  document.getElementById("pre"),
  document.getElementById("post"),
  document.getElementById("submit"),
  document.getElementById("anio"),
  document.getElementById("mes"),
  document.getElementById("title"),
  document.getElementById("calendar")
];
const head = ['Enero','Febrero','Marzo','Abril','Marzo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const domingo = [6+7*0,6+7*1,6+7*2,6+7*3,6+7*4,6+7*5];

function getLDMonth(a,m){
  let ldM = (m<11) ? new Date(a,m+1,0) : new Date(a+1,0,0);
  return ldM.getDate();
}

function getFDWeek(a,m){
  let fdW = new Date(a,m,1);
  fdw = (fdW.getDay() != 0) ? fdW.getDay()-1 : 6;
  return fdw;
}

function getLDWeek(a,m){
  let ldM = new Date(a,m+1,0);
  ldM = (ldM.getDay() != 0) ? ldM.getDay()-1 : 6;
  return ldM;
}

function getArrayMonth(ldM,fdW,ldW){
  let arrayMes = [];
  for(let i=1; i<=ldM; i++) arrayMes.push(i);
  for(let i=0; i<fdW; i++) arrayMes.unshift(0);
  for(let i=6; i>ldW; i--) arrayMes.push(0);
  return arrayMes;
}

function setCalendar(arrayMes){
  weeks = arrayMes.length/7;
  pos=0;
  let tabla="<table><tr>";
  tabla+="<th>LUNES</th><th>MARTES</th><th>MIÉRCOLES</th><th>JUEVES</th><th>VIERNES</th><th>SÁBADO</th><th>DOMINGO</th></tr>";
  for(let w=0; w<weeks; w++){
    tabla+="<tr>";
      for(let i=0; i<7; i++){
        if(arrayMes[pos]!=0 && domingo.includes(pos)) tabla+="<td class='red'>"+arrayMes[pos];
        else if(arrayMes[pos]!=0) tabla+="<td>"+arrayMes[pos];
        else tabla+="<td class='grey'>";
        pos++;
        tabla+="</td>";
      }
      tabla+="</tr>";
  }
  tabla+="</table>";
  calendar.innerHTML=tabla;
}

function createCalendar(a,m){
  const [ldM,fdW,ldW] = [getLDMonth(a,m),getFDWeek(a,m),getLDWeek(a,m)];
  let arrayMes = getArrayMonth(ldM,fdW,ldW);
  title.innerHTML=head[m]+" - "+a;
  setCalendar(arrayMes);
}

submit.addEventListener("click",()=>{
  const [a,m] = [anio.value,mes.value-1];
  createCalendar(a,m);
});

pre.addEventListener("click",()=>{
  let [a,m] = [anio.value,mes.value-1];
  if(m==0){
    a--;
    m=11;
  } else m--;
  anio.value = a;
  mes.value = m+1;
  createCalendar(a,m);
});

post.addEventListener("click",()=>{
  let [a,m] = [anio.value,mes.value-1];
  if(m==11){
    a++;
    m=0;
  } else m++;
  anio.value = a;
  mes.value = m+1;
  createCalendar(a,m);
});