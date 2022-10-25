let multi=new Array();

document.writeln("<p>*** Ejecución Iniciada. ***</p>");

multi[0]=new Array();
for(let i=0; i<10; i++) multi[0].push(i);

for(let i=1; i<10; i++){
  multi[i]=new Array();
  for(let j=1; j<=10; j++){
    multi[i].push(i*j);
  }
}

for(let f of multi){
  for(let e of f){
    if(e<10) e = '0'+e;
    document.writeln(e+"&nbsp;");
  }
  document.writeln("<br>");
}

document.writeln("<p>*** Ejecución Finalizada. ***</p>");