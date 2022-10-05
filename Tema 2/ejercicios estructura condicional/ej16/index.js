/* Que reciba un importe bruto y calcule su importe neto, 
si es mayor de 15.000 se le aplicará un 16% de impuestos, 
en caso contrario se le aplicará un 10%. */

let bruto, neto;
do{
  bruto = prompt("Indica el impoorte bruto");
  if(isNaN(bruto) || !bruto) alert("No has introducido un número, intentalo de nuevo");
  else if(bruto<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(bruto) || !bruto || bruto <= 0);

neto = (bruto>15000) ? bruto*1.16 : bruto*1.1;

alert(` - Precio Bruto = ${bruto}€\n - Precio Neto = ${neto}€`);