/* Que pida una letra y detecte si es una vocal */

let str;

do{
  str = prompt("Introduce una letra").toLowerCase();
  if(typeof(str)!="string" || str.length!=1) alert("No has introducido una letra, intentalo de nuevo");
} while(typeof(str)!="string" || str.length!=1);

if(str=='a' || str=='e' || str=='i' || str=='o' || str=='u'){
  alert(`La letra ${str} es una vocal`);
} else alert(`La letra "${str}" es una consonante`);