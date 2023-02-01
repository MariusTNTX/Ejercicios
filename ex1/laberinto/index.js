//CLASE PUNTO

class Punto{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

//VARIABLES

const laberinto = [], //Array con los valores de las celdas del laberinto
      area = document.getElementById("area"); //Elemento textarea del HTML
let muros = 15, //Número de muros a insertar
    paso = 1, //Número de pasos inicial
    celdas = [], //Array variable de celdas compatibles para dar el siguiente paso
    ptAct = new Punto(0,0); //punto actual

//FUNCIONES

function imprimirArea(){
  area.textContent = '';
  for(f of laberinto){
    for(c of f){
      area.textContent += c + ' ';
    }
    area.textContent += '\n';
  }
}

//CONSTRUCCIÓN DEL LABBERINTO

//Generación del array 10x10
for(let i=0; i<10; i++){
  laberinto[i] = [];
  for(let j=0; j<10; j++){
    laberinto[i][j]='00';
  }
}

//Generación de las casillas de inicio y fin
laberinto[0][0]='II';
laberinto[9][9]='FF';

//Generación de los muros
while(muros>0){
  let f = Math.floor(Math.random()*10);
  let c = Math.floor(Math.random()*10);
  if(laberinto[f][c]=='00'){
    laberinto[f][c]='**';
    muros--;
  }
}

//Impresión del Contenido
imprimirArea();


//INTERVALO DE 1 SEGUNDO

let id = setInterval(() => {

  //ALMACENADO DE CASILLAS VECINAS COMPATIBLES

  //Se recorren las 8 casillas adyacentes
  for(let i=-1; i<=1; i++){
    for(let j=-1; j<=1; j++){
      //Si no es la casilla actual, si i y j no estan fuera de rango y si la celda contiene 00 o FF se añade al array
      if(!(i==0 && j==0) && 
        (ptAct.x+i>=0 && ptAct.x+i<10 && ptAct.y+j>=0 && ptAct.y+j<10) && 
        (laberinto[ptAct.x+i][ptAct.y+j]=='00' || laberinto[ptAct.x+i][ptAct.y+j]=='FF')){
          //Si es la casilla FF se almacena 'FF', sino se almacena un Punto
          if(laberinto[ptAct.x+i][ptAct.y+j]=='FF') celdas.push('FF');
          else celdas.push(new Punto(ptAct.x+i, ptAct.y+j));
      }
    }
  }

  //MOVIMIENTO O RESOLUCIÓN

  //Si hay celdas compatibles y ninguna de ellas es la casilla de salida:
  if(celdas.length>0 && !celdas.includes('FF')){
    //Se elige una celda aleatoria de las compatibles y se añade a celdas
    let index = Math.floor(Math.random()*celdas.length);
    let f = celdas[index].x;
    let c = celdas[index].y;
    //Se añade el número correspondiente al array laberinto y se imprime en el textArea
    if(paso<10) laberinto[f][c]='0'+paso;
    else laberinto[f][c]=paso;
    imprimirArea();
    //Se actualiza el numero de pasos, la posición actual y se vacía el array celdas
    paso++;
    ptAct=new Punto(f,c);
    celdas = [];

  //Resolución de la partida:
  } else{ 
    clearInterval(id);
    if(celdas.includes('FF')) alert("¡Felicidades, has salido del laberinto en "+(paso-1)+" pasos!");
    else alert("No has logrado salir del laberinto ("+(paso-1)+" pasos)");
  }
}, 200);