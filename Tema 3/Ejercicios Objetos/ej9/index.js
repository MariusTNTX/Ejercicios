/* Realiza un script que escriba en el documento la fecha y hora 
actual. La salida deberá tener elsiguiente formato:
Hoy es martes, 19 de Octubre de 2021 y son las 13:32 horas */

const f = new Date();
const mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const dia = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

document.write(`<h1>Hoy es ${dia[f.getDay()]}, ${f.getDate()} de ${mes[f.getMonth()]} de ${f.getFullYear()} y son las ${f.getHours()}:${f.getMinutes()} horas.</h1>`)




