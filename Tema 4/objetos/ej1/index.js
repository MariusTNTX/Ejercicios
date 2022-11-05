let randNum, frecuencias = new Array(0,0,0,0,0,0,0,0,0,0);

for(let i=0; i<10000;i++){
  randNum = Math.floor(Math.random()*10+1);
  frecuencias[randNum-1]++;
}

document.writeln("FRECUENCIAS <br>");
for(let i in frecuencias){
  document.writeln("Número "+(parseInt(i)+1)+": "+frecuencias[i]+"<br>");
}