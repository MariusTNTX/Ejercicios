/* Mostrar las tablas de multiplicar del 1 al 10 de 
   los números del 1 al 12. */

let tabla="";
for(let i=1; i<=12; i++){
  tabla+=`TABLA DE MULTIPLICAR DEL ${i}:\n`;
  for(let j=0; j<=10; j++){
    tabla+=`  ${i} x ${j} = ${i*j}\n`;
  }
  alert(tabla);
  tabla="";
}