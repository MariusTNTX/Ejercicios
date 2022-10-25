let multi = new Array(), sumaFila=0, sumaCol=new Array();

for(let i=0; i<10; i++) sumaCol[i]=0; //Fill de sumaCol: 9 elementos a cero

for(let i=0; i<10; i++){
  multi[i]=new Array();
  for(let j=0; j<10; j++){
    multi[i][j]=Math.floor(Math.random()*9+1);
    sumaFila+=multi[i][j];
    sumaCol[j]+=multi[i][j];
  }
  multi[i][10]=sumaFila; //Se introduce en la última columna la suma
  sumaFila=0;
}
multi.push(sumaCol); //Se introduce en la última fila la suma

for(let f of multi){
  for(let e of f){
    if(e<10){ //Si es menor de 10 se le añade un cero
      e = '0'+e;
      document.writeln(e+'&nbsp;');
    } else { //Sino se le pone color rojo
      document.writeln('<span>'+e+'&nbsp;</span>');
    }
  }
  document.writeln("<br>");
}