let array1 = [];
let array2 = new Array();
let array3 = new Array('Ana','Jesus','Mario');

let array=[];
let numeroAleatorio=Math.floor(Math.random()*(21-10)+10); //10-20

for(let i=0; i<numeroAleatorio; i++){
  let aleatorioContenido=Math.floor(Math.random()*10);
  array[i]=aleatorioContenido;
}

for(let i=0; i<numeroAleatorio; i++){
  document.writeln(array[i]);
}
document.writeln("<br>");

