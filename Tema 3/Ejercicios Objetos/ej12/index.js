let dia=1, mes, anio, fecha, semana=0, calen = new Array();
const strMes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const strDiaSem = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

do{
  mes = prompt(`Escribe un mes en formato número:`);
  if(isNaN(mes) || !mes) alert("No has introducido un número, intentalo de nuevo");
  else if(mes<1 || mes>12) alert("No has introducido un número entre 1 y 12, intentalo de nuevo");
} while(isNaN(mes) || !mes || mes<1 || mes>12);

do{
  anio = prompt(`Escribe un año:`);
  if(isNaN(anio) || !anio) alert("No has introducido un número, intentalo de nuevo");
  else if(anio<1 || anio>9999) alert("No has introducido un número entre 0 y 9999, intentalo de nuevo");
} while(isNaN(anio) || !anio || anio<1 || anio>9999);

document.writeln("<h1>" + strMes[mes-1].toUpperCase() + " - " + anio + "</h1>");

while(new Date(anio,(mes-1),dia,0,0,0).getMonth()<mes){
  fecha = new Date(anio,(mes-1),dia,0,0,0);
  diaSem = fecha.getDay();
  document.writeln(` ${dia} (${strDiaSem[diaSem]}) `);
  dia++;
  if(diaSem==0) document.writeln("<br>");
}

console.log(calen);
