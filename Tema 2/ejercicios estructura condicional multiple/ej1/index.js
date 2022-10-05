/* Mostrar por pantalla un menú con las siguientes dos opciones
a)saludo
b)despedida
A continuación el programa pedirá al usuario que elija una opción
• Si elige la <a> mostrará por pantalla “Hola que tal”
• Si elige la <b> mostrará por pantalla “Hasta pronto”
• Si introduce cualquier otra cosa mostrará “Opción incorrecta” */

let str;

do{
  str = prompt("a)Saludo\nb)Despedida").toLowerCase();
  if(str.length==0) alert("No has introducido ningún caracter, intentalo de nuevo");
} while(str.length==0);

switch(str){
  case 'a': alert("Hola que tal");
    break;
  case 'b': alert("Hasta pronto");
    break;
  default: alert("Opción incorrecta");
}

