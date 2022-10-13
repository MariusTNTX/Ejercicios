/* Si le pasamos una cadena con un nombre y apellidos, realizar un programa que muestre las iniciales en mayúsculas */

let str;
do{
  str = prompt("Introduce nombre y apellidos").trim();
  if(!str.includes(" ") || str.indexOf(" ") == str.lastIndexOf(" ")) alert("No has introducido una cadena válida, intentalo de nuevo");
  if(str.length==0) alert("No has introducido una cadena, intentalo de nuevo");
} while(str.length==0 || !str.includes(" ") || str.indexOf(" ") == str.lastIndexOf(" "));

let iniciales = str.charAt(0).toUpperCase();

for(let i=0; i<str.length; i++){
  if(str.substring(i,i+1)==" ") iniciales+="."+str.charAt(i+1).toUpperCase();
}

alert(`Iniciales de "${str}" = "${iniciales}"`);
document.write(`Iniciales de "${str}" = "${iniciales}"`);