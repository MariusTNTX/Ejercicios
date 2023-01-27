class Partida{
  constructor(){
    this.delay=500; //Tiempo entre cada parpadeo (Velocidad)
    this.turnoJ=false; //Turno de la maquina (false) o del jugador (true)
    this.colores=[]; //Array de colores de la progresión expresados en números. Es también el número de puntos (length)
    this.cont = 0; //Contador de opciones seleccionadas por el jugador
    this.elems=[
      document.getElementById("amarillo"), //0
      document.getElementById("rojo"), //1
      document.getElementById("verde"), //2
      document.getElementById("azul") //3
    ];
    this.puntos = document.getElementById("puntos");
    this.prepararPartida(); //Se apagan las luces y se añaden los EventListener
    this.turnoMaquina(); //Inicia la máquina
  }

  prepararPartida(){
    for(let elem of this.elems){ //Por cada opción: 
      elem.classList.replace("on","off"); //Se apaga su luz
      elem.addEventListener("click",()=>{ //Si se pulsa la luz durante el turno del jugador se verifica la opción
        if(this.turnoJ) this.verificarClick(elem);
      });
    } 
  }

  turnoMaquina(){
    for(let elem of this.elems){elem.classList.remove("cursor")}//Se bloquean los cursor pointer
    this.cont=0;
    this.colores.push(Math.floor(Math.random()*4)); //Se añade un nuevo color aleatorio
    let i = 0; //Se almacena el index del color a mostrar
    let luz = true; //Indica si debe dar luz o apagarse
    let id = setInterval(() => {
      if(i < this.colores.length){
        if(luz) this.elems[this.colores[i]].classList.replace("off","on");
        else {
          this.elems[this.colores[i]].classList.replace("on","off");
          i++;
        }
        luz = (luz) ? false : true;
      } else {
        for(let elem of this.elems){elem.classList.add("cursor")} //Se habilitan los cursor pointer
        this.turnoJ = true;
        clearInterval(id);
      }
    }, this.delay);
  }

  verificarClick(elem){
    console.log(elem.id);
    let num;
    switch(elem.id){
      case "amarillo": num=0;
        break;
      case "rojo": num=1;
        break;
      case "verde": num=2;
        break;
      case "azul": num=3;
        break;
    }
    //Verificación de la opción
    if(num == this.colores[this.cont]){
      console.log("correcto");
      this.cont++;
      if(this.cont>=this.colores.length){
        console.log("Turno Máquina");
        this.puntos.value=this.colores.length; //Nueva línea
        this.turnoMaquina();
      } 
      else console.log("Seguimos jugando");
    } 
    else this.finJuego();
  }

  finJuego(){
    console.log("Incorrecto");
    alert("Era el "+this.elems[this.colores[this.cont]].id+" pringao");
  }

}