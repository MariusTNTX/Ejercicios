/* Realiza un programa que pregunte las horas que ha trabajado un 
trabajador a la semana y a cuanto se paga la hora. Se desea calcular 
el salario neto semanal de un trabajador en función del número de 
horas trabajadas y la tasa de impuestos:
a) Las primeras 35 horas se pagan a tarifa normal.
b) Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal.
c) Las tasas de impuestos son:
• Los primeros 1200 euros son libres de impuestos.
• Los siguientes 900 euros tienen un 25 por 100 de impuestos.
• Las restantes, un 45 por 100 de impuestos. */

let horas, //Horas totales trabajadas
    paga, //Dinero que cobra por hora
    extras, //Horas extras trabajadas
    bruto, //Salario bruto
    neto, //Salario neto
    salExtra=0, //Excedente del salario bruto / Salario sujeto a impuestos (mayor de 1200€)
    txtTramos=""; //Texto opcional de los tramos (en caso de que los haya)

do{ //Validación de las horas semanales
  horas = prompt("Indica las horas semanales del empleado");
    if(isNaN(horas) || !horas) alert("No has introducido un número, intentalo de nuevo");
    else if(horas<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(horas) || !horas || horas <= 0);

do{ //Validación del dinero cobrado por hora
  paga = prompt("Indica cuanto cobra por hora");
    if(isNaN(paga) || !paga) alert("No has introducido un número, intentalo de nuevo");
    else if(paga<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(paga) || !paga || paga <= 0);

extras = (horas>35) ? horas-35 : 0; //Horas extra
bruto = (extras>0) ? 35*paga + extras*(paga*1.5) : horas*paga; //Salario bruto

//CALCULO DE LOS IMPUESTOS 
if(bruto>1200){
  salExtra = bruto-1200; //Calculo del salario sujeto a impuestos
  if(salExtra<=900){ // 1 tramo
    neto = 1200 + salExtra*(1-0.25); //Calculo del salario neto
    txtTramos=`  - Tramo 1: ${salExtra} - 25% = ${(salExtra*(1-0.25))}€\n` //25% del excedente
             +`  - Total: ${(salExtra*(1-0.25))}€ (Restar al Bruto: ${(bruto-neto)}€)\n`; 
  } else { // 2 tramos
    neto = 1200 + 900*(1-0.25) + (salExtra-900)*(1-0.45); //Calculo del salario neto
    txtTramos=`  - Tramo 1: 900 - 25% = ${(900*(1-0.25))}€\n` //25% de 900
             +`  - Tramo 2: ${(salExtra-900)} - 45% = ${((salExtra-900)*(1-0.45))}€\n` //45% del restante
             +`  - Total: ${(900*(1-0.25) + (salExtra-900)*(1-0.45))}€ (Restar al Bruto: ${(bruto-neto)}€)\n`;
  }
} else neto = bruto;

//OUTPUT
alert(`- Horas totales trabajadas: ${horas} horas\n`
     +`- Precio por hora: ${paga}€\n`
     +`- Horas extra trabajadas: ${extras} horas\n`
     +`- Precio por hora extra: ${(paga*1.5)}€\n`
     +`- Salario Bruto: ${bruto}€\n`
     +`- Salario sujeto a impuestos: ${salExtra}€\n`
     + txtTramos //Solo se mostrará si se aplican tramos
     +`- Salario Neto: ${neto}€`);
