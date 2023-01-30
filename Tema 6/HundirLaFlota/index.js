let cuadricula = document.getElementById("cuadricula"),
fila, col, div, span, cuadric=[], barcoSelec, barcoOrient, 
letras = ['A','B','C','D','E','F','G','H','I','J'], 
barcos=['xl','lg','lg','md','md','md','sm','sm','sm','sm']; 

fila = document.createElement("tr");
fila.appendChild(document.createElement("td"));

function unSelec(){
  for(let celda of document.getElementsByTagName("td")){
    celda.style.backgroundColor="white";
  }
}

function selec(elem,size=1,orient=0){
  console.log(elem.id)
  let celdas = [elem.id], row, col;
  if(elem.id.length == 3){
    row = parseInt(elem.id.substring(0,1));
    col = parseInt(letras.indexOf(elem.id.substring(2,3)));
  } else {
    row = parseInt(elem.id.substring(0,2));
    col = parseInt(letras.indexOf(elem.id.substring(3,4)));
  }

  if(orient==0){
    if(size>=2) celdas.push(row-1+'-'+letras[col]);
    if(size>=3) celdas.push(row+1+'-'+letras[col]);
    if(size==4) celdas.push(row-2+'-'+letras[col]);
  } else {
    if(size>=2) celdas.push(row+'-'+letras[col-1]);
    if(size>=3) celdas.push(row+'-'+letras[col+1]);
    if(size==4) celdas.push(row+'-'+letras[col-2]);
  }
  console.log(row+' - '+col);
  console.log(celdas);

  unSelec();
  for(let id of celdas){
    document.getElementById(id).style.backgroundColor="red";
  }
}

//Fill del cuadric y primera fila
for(let i=0; i<10; i++){
  cuadric[i] = [];
  for(let j=0; j<10; j++) cuadric[i][j] = 0;
  col = document.createElement("td");
  col.textContent = letras[i];
  fila.appendChild(col);
}
cuadricula.appendChild(fila);

//Instancia del Cuadric
for(let i=0; i<10; i++){
  fila = document.createElement("tr");
  for(let j=0; j<11; j++){
    col = document.createElement("td");
    if(j==0) col.textContent=i+1;
    else{ 
      col.setAttribute("id",(i+1)+'-'+letras[j-1]);
      cuadric[i][j] = col;
    }
    fila.appendChild(col);
  }
  cuadricula.appendChild(fila);
}

//Generación de Barcos
for(size of barcos){
  span = document.createElement("span");
  span.setAttribute("draggable","true");
  span.classList.add("barco");
  span.classList.add(size);
  span.classList.add("v");
  document.getElementById("barcos").appendChild(span);
}

//Eventos de las celdas
for(let td of document.getElementsByTagName("td")){
  td.addEventListener("dragenter",()=>{
    td.style.backgroundColor='red';
    selec(td,barcoSelec,barcoOrient);
  });
  td.addEventListener("dragleave",()=>{td.style.backgroundColor='white';});
}

//Eventos de los barcos
for(let span of document.getElementsByTagName("span")){
  span.addEventListener("drag",()=>{
    span.style.display='none';
    switch(span.classList.toString().substring(6,8)){
      case 'sm': barcoSelec=1; break;
      case 'md': barcoSelec=2; break;
      case 'lg': barcoSelec=3; break;
      case 'xl': barcoSelec=4; break;
    }
  });
  span.addEventListener("dragend",()=>{
    span.style.display='inline';
    barcoSelec=0;
  });
  span.addEventListener("click",(e)=>{
    if(e.button==2){
      barcoOrient = (barcoOrient==0) ? 1 : 0;
      if(barcoOrient==0) span.classList.replace('h','v');
      if(barcoOrient==1) span.classList.replace('v','h');
    } 
  });
}