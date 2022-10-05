/* Realiza un programa que pregunte las horas que ha 
trabajado un trabajador a la semana y a cuanto se 
paga la hora. El programa debe de calcular el salario 
semanal sabiendo que si se pasan de cuarenta horas 
semanales, las horas extraordinarias se pagarán a 
razón de 1.5 veces la hora ordinaria */

let horas, paga;

do{
  horas = prompt("Indica las horas semanales del empleado");
    if(isNaN(horas) || !horas) alert("No has introducido un número, intentalo de nuevo");
    else if(horas<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(horas) || !horas || horas <= 0);

do{
  paga = prompt("Indica cuanto se paga por hora");
    if(isNaN(paga) || !paga) alert("No has introducido un número, intentalo de nuevo");
    else if(paga<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(paga) || !paga || paga <= 0);

salario = (horas>40) ? 40*paga + (horas-40)*(paga*1.5) : horas*paga;

if(horas>40) alert(`El salario semanal del empleado de 40 horas cobradas a ${paga}€ `+
`con ${(horas-40)} horas extra cobrandolas a ${(paga*1.5)}€ será de ${salario}€`);
else alert(`El salario semanal del empleado con ${horas} horas cobradas a ${paga}€ será de ${salario}€`);