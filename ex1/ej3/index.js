class Ciudad{
  constructor(){
    //A y B
    this.txtArea = document.getElementById("area");
    this.cuadricula=[];
    //Se recorre las filas de la cuadricula 10 veces
    for(let i=0; i<10; i++){
      //Se crea un nuevo array dentro de cada posición
      this.cuadricula[i] = [];
      //Dicho array se recorre 10 veces
      for(let j=0; j<10; j++){
        //Se le da el valor cero
        this.cuadricula[i][j]=0;
      }
    }
    //Se inicia el intervalo del simulador de habitantes
    this.IniciarGenerador();
  }

  //Inicia el generador, destructor e impresor automático de habitantes
  IniciarGenerador(){
    //Cada medio segundo:
    setInterval(()=>{
      //Exito al introducir a un habitante
      let exito = false;
      //Mientras no se tenga éxito se tratará de introducir a un habitante
      while(!exito){
        //Se generan las coordenadas aleatorias
        let a = Math.floor(Math.random()*10);
        let b = Math.floor(Math.random()*10);
        //Si no hay vecinos cerca se tiene exito, se obtienen segundos aleatorios entre 5 y 9 y se añaden a la celda como Date
        if(this.SinVecinos(a,b)){
          exito = true;
          let segs = Math.floor(Math.random()*(9-5+1)+5);
          let fecha = new Date();
          fecha.setTime(fecha.getTime()+segs*1000);
          this.cuadricula[a][b] = fecha;
        }
      }
      //Tras introducirlo se comprobarán los habitantes muertos
      this.VerificarMuertos();
      //Una vez comprobado todo se imprime la matriz
      this.Mostrar();
    },500)
  }

  //Devuelve true si no hay vecinos cerca de la posición indicada por las 2 coordenadas a y b
  SinVecinos(a,b){
    //En este caso tener exito significa no tener vecinos cerca, por lo que se inicializa a true
    let exito=true;
    //Se recorre la coordenada a desde -1 a +1
    for(let i=a-1; i<=a+1; i++){
      //Se recorre la coordenada b desde -1 a +1
      for(let j=b-1; j<=b+1; j++){
        //Si la posición está dentro del array, si está ocupada y si no es la posición del habitante no habrá éxito
        if((i>=0 && i<10 && j>=0 && j<10) && this.cuadricula[i][j]!=0 && !(i==a && j==b)){
          exito=false;
        }
      }
    }
    return exito;
  }

  //Recorre la ciudad poniendo ceros a los habitantes muertos
  VerificarMuertos(){
    //Se recorren filas y columnas
    for(let f in this.cuadricula){
      for(let c in this.cuadricula[f]){
        //Si encuentra una fecha:
        if(this.cuadricula[f][c] instanceof Date){
          //Si está muerto se sustituye su valor por un cero
          if(this.Muerto(this.cuadricula[f][c])){
            this.cuadricula[f][c]=0;
          }
        }
      }
    }
  }

  //Devuelve true si la fecha actual supera su fecha
  Muerto(c){
    let fechaActual = new Date();
    return (c.getTime() <= fechaActual.getTime());
  }

  //Muestra en el txtArea los números de la cuadrícula
  Mostrar(){
    //Texto total a añadir al txtArea
    let txt="";
    //Se recorren filas y columnas
    for(let f in this.cuadricula){
      for(let c in this.cuadricula[f]){
        //Si el valor es cero se aáde un cero y un espacio
        if(this.cuadricula[f][c]==0){
          txt+='0 ';
        }
        //Sino será una fecha, por loq ue se calculan sus segundos y se añaden junto a un espacio
        else{
          txt+=this.CalcularSegs(this.cuadricula[f][c])+' ';
        }
      }
      //Tras cada fila se añade un salto de línea
      txt+="\n";
    }
    //Finalmente todo el contenido se imprime en el txtArea
    this.txtArea.textContent = txt;
  }

  //Calcula los segundos redondeados entre una fecha dada y la actual
  CalcularSegs(fecha){
    let fechaActual = new Date();
    return Math.round((fecha.getTime() - fechaActual.getTime())/1000);
  }
}

//Se instancia un objeto de la clase Ciudad que automáticamente pone en marcha todo el proceso:
ciudad = new Ciudad();