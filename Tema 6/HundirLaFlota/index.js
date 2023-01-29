let cuadricula = document.getElementById("cuadricula"),
fila, col, div, span, array=[], 
letras = ['A','B','C','D','E','F','G','H','I','J'], 
barcos=['xl','lg','lg','md','md','md','sm','sm','sm','sm']; 

fila = document.createElement("tr");
fila.appendChild(document.createElement("td"));

for(let i=0; i<10; i++){
  array[i] = [];
  for(let j=0; j<10; j++) array[i][j] = 0;
  col = document.createElement("td");
  col.textContent = letras[i];
  fila.appendChild(col);
}

cuadricula.appendChild(fila);

for(let i=0; i<10; i++){
  fila = document.createElement("tr");
  for(let j=0; j<11; j++){
    col = document.createElement("td");
    if(j==0) col.textContent=i+1;
    else{ 
      col.setAttribute("id",letras[i]+'-'+j);
      array[i][j] = col;
    }
    fila.appendChild(col);
  }
  cuadricula.appendChild(fila);
}

for(barco of barcos){
  span = document.createElement("span");
  span.classList.add("barco");
  span.classList.add(barco);
  document.getElementById("barcos").appendChild(span);
}
