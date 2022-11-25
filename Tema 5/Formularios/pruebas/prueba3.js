/* let total = prompt("Número impar:");
let espacios = Math.floor(total/2);
let txt = "";

for(let s=espacios, a=1; (s>=0 && a<=total); s--, a+=2){
  for(let i=0; i<s; i++) txt+=" ";
  for(let i=0; i<a; i++) txt+="*";
  txt+="<br>";
  console.log(txt);
}

document.write(txt); */

/* let total, s, esc="_", txt="";
do{
  total=prompt("Introduce un número entero positivo:");
  if(isNaN(total)) alert("No has escrito un número");
  else if(total<=0) alert("Número incorrecto");
} while(isNaN(total) || total<=0);

s = total*2;

while(s>=0){
  for(let i=0; i<s; i++) txt+="&nbsp;&nbsp;&nbsp;";
  txt+=esc+"<br>";
  esc="_|";
  s-=2;
}

document.write(txt); */

let total, esp, ast=1, txt="", incr=1;

do{
  total=prompt("Introduce un número entero positivo:");
  if(isNaN(total)) alert("No has escrito un número");
  else if(total<=0) alert("Número incorrecto");
  else if(total%2==0) alert("El número debe ser impar");
} while(isNaN(total) || total<=0 || total%2==0);

esp = Math.floor(total/2);

for(let a=1, s=esp; a>=1 && s<=esp; a+=incr*2, s-=incr){
  for(let i=0; i<s; i++) txt+=" ";
  for(let i=0; i<a; i++) txt+="*";
  txt+="<br>";
  if(a==total) incr=-1;
}

document.write(txt);