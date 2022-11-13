//INCLUIR ESTILOS EN INDEX.CSS PARA APILAR CARTAS: C1, C2, C3...

class Carta{
  constructor(p,n,v){
    this.palo=p;
    this.num=n;
    this.visible=v;
  }
  getPalo(){return this.palo;}
  getNumero(){return this.num;}
  esVisible(){return this.visible;}
  setVisible(v){this.visible=v;}
  toHTML(n){
    if(this.visible) return `<img class="carta c${n}" src="./PlayingCards/${this.palo+this.num}.png" alt="Carta">`;
    return `<img id="c2Banca" class="carta c${n}" src="./PlayingCards/BackColor_Blue.png" alt="Carta">`;
  }
  desvelar(){
    let carta = document.getElementById("c2Banca");
    carta.setAttribute("src",`./PlayingCards/${this.palo+this.num}.png`);
  }
}

//-------------------------------------------------------------------------------------------------

class Baraja{
  constructor(){
    this.palos=['Club','Diamond','Heart','Spade'];
    this.cartas=[];
    for(let p of this.palos){
      for(let i=1; i<=13; i++){
        this.cartas.push(new Carta(p,i,true));
      }
    }
    this.sonido = this.cargarSonido("./carta2.mp3");
  }

  cargarSonido(fuente) {
    let sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; //Oculto
    document.body.appendChild(sonido);
    return sonido;
  }

  generarBaraja(){
    this.cartas=[];
    for(let p of this.palos){
      for(let i=1; i<=13; i++){
        this.cartas.push(new Carta(p,i,true));
      }
    }
  }

  barajar(){
    let aux = [], rand;
    while(this.cartas.length>0){
      rand = Math.floor(Math.random()*this.cartas.length);
      aux.push(this.cartas[rand]);
      this.cartas.splice(rand,1);
    }
    this.cartas = aux;
  }

  sacarCarta(){
    this.sonido.play();
    return this.cartas.shift();
  }

  getBaraja(){return this.cartas;}
}

//-------------------------------------------------------------------------------------------------

class Jugador{
  constructor(nombre, rol){
    this.nombre = nombre;
    this.rol = rol; //JUG - CPU - BANCA
    this.apuesta = 0;
    this.mazo = [];
    this.total = 0;
    this.plantado = false;
    this.pasado = false;
    this.divTotal;
    this.divCartas;
    this.divApuesta;
  }

  sumarCarta(carta, visible){
    visible=(visible!=undefined)?visible:true;
    carta.setVisible(visible);
    this.mazo.push(carta);
    if(visible){
      if(carta.getNumero()>=10) this.total+=10;
      else this.total+=carta.getNumero();
    }
    this.divTotal.value=this.total;
    this.divCartas.innerHTML+=carta.toHTML(this.mazo.length);
    if(this.total>21) this.verificarTotal();
  }
  desvelarCartaBanca(){
    this.mazo[1].desvelar();
    if(this.mazo[1].getNumero()>=10) this.total+=10;
    else this.total+=this.mazo[1].getNumero();
  }
  esBlackJack(){
    let as=false, diez=false;
    for(let c of this.mazo){
      if(c.getNumero()==1) as=true;
      else if(c.getNumero()>=10) diez=true;
    }
    return (this.mazo.length==2 && as && diez);
  }
  toHTML(){
    let txt = `<div id="${this.nombre}" class="jug"><h2>${this.nombre}</h2><input type="text" id="total${this.nombre}" value="${this.total}" readonly><br><div id="cartas${this.nombre}" class="cartas"><div id="subCartas${this.nombre}" class="subCartas"></div></div>`;
    if(this.rol!='BANCA') txt += `<p>Apuesta:</p><input type="text" id="apuesta${this.nombre}" value="${this.apuesta} €" readonly></div>`;
    else txt += `</div>`;
    return txt;
  }
  setDivs(){
    this.divTotal = document.getElementById("total"+this.nombre);
    this.divCartas = document.getElementById("subCartas"+this.nombre);
    this.divApuesta = document.getElementById("apuesta"+this.nombre);
  }
  setApuesta(ap){
    this.apuesta=ap;
    this.setDivs();
    this.divApuesta.value=this.apuesta+" €"; 
  }
  setRecuadro(bool){
    let rec = document.getElementById("cartas"+this.nombre);
    if(bool) rec.classList.add("juega");
    else rec.classList.remove("juega");
  }
  turnoJ1(btnAdd,btnStop){
    btnAdd.removeAttribute("disabled");
    btnStop.removeAttribute("disabled");
    this.setRecuadro(true);
  }
  verificarTotal(){
    if(this.total>21) this.pasarse();
  }
  plantarse(){
    this.plantado=true;
    this.setRecuadro(false);
    this.divTotal.classList.add("noJuega");
  }
  pasarse(){
    this.pasado=true;
    this.divTotal.classList.add("noJuega");
  }

  getNombre(){return this.nombre;}
  getApuesta(){return this.apuesta;}
  getTotal(){return this.total;}
  getJuega(){return !this.plantado && this.total<=21;}
  
  setJuega(j){this.juega=j;}
}

//-------------------------------------------------------------------------------------------------

class Partida{
  constructor(apMin, apMax, numJug, btnAdd, btnStop){
    this.apuestaMin = parseInt(apMin);
    this.apuestaMax = parseInt(apMax);
    this.jugadores = [new Jugador('J1','JUG')];
    this.indexJ1 = 0;
    for(let i=2; i<=numJug; i++) this.jugadores.push(new Jugador("J"+i,'CPU'));
    if(this.jugadores.length==3){
      let aux = this.jugadores[1];
      this.jugadores.splice(1,1);
      this.jugadores.unshift(aux);
      this.indexJ1 = 1;
    } 
    this.banca = new Jugador('Banca','BANCA');
    this.baraja = new Baraja();
    this.faseTurnos = false;
    this.finalizado = false;
    this.btnAdd = btnAdd;
    this.btnStop = btnStop;
    this.jugsEnJuego = [];
    this.jugadores.map(j=>{this.jugsEnJuego.push(j)});
  }

  generarJugadores(banca,jugadores){
    banca.innerHTML += this.banca.toHTML();
    for(let j of this.jugadores){
      jugadores.innerHTML += j.toHTML();
    } 
  }
  situarApuestaJ1(valor){this.jugadores[this.indexJ1].setApuesta(valor);}
  generarApuestas(){
    for(let i=0; i<this.jugadores.length; i++){
      let min = (this.apuestaMin/10<1)?1:this.apuestaMin/10;
      let max = this.apuestaMax/10;
      let apuesta = Math.floor(Math.random()*(max-min+1)+min)*10;
      if(i!=this.indexJ1) this.jugadores[i].setApuesta(apuesta);
    }
    this.banca.setDivs();
  }
  repartir(cartas,j1){
    let id = setInterval(()=>{
      let carta = (cartas.length>0)?cartas.shift():false;
      if(carta){
        if(this.faseTurnos) carta.jug.setRecuadro(true);
        carta.jug.sumarCarta(this.baraja.sacarCarta(),carta.bool);
        carta.jug.verificarTotal();
      }
      else{
        clearInterval(id);
        if(j1) this.getJ1().setRecuadro(false);
        if(!this.faseTurnos) this.faseTurnos=true;
        this.siguienteTurno();
      }
    },600);
  }
  reparticionInicial(){
    this.baraja.barajar();
    let cartas = [];
    for(let j of this.jugadores){
      cartas.push({jug: j, bool: true});
      cartas.push({jug: j, bool: true});
    }
    cartas.push({jug: this.banca, bool: true});
    cartas.push({jug: this.banca, bool: false});
    this.repartir(cartas);
  }
  siguienteTurno(){
    if(this.jugsEnJuego.length==0) this.resolverPartida(); //Si no hay jugadores en jugsEnPartida se llama a resolverPartida()
    else { //Si hay jugadores
      let jug = this.jugsEnJuego.shift(); //Se extrae el primer jugador
      if(jug.getNombre()!="J1"){ //Si no es J1:
        if(jug.getJuega()){ //Si CPU juega:
          jug.setRecuadro(true);
          if(jug.getTotal()<=16) jug.sumarCarta(this.baraja.sacarCarta()); //Coge si debe hacerlo
          else jug.plantarse(); //Sino se planta
          if(jug.getJuega()) this.jugsEnJuego.push(jug); //Si juega se situa el jugador al final del array, sino no
          this.delaySiguienteTurno(jug);
        } //Si CPU no juega NO se vuelve a añadir a jugsEnPartida
        //else if(jug.getNombre()=="Banca") this.resolverPartida(); //Pero si el CPU que no puede jugar es la banca se resuelve la partida
      } else if(jug.getJuega()){
        this.jugsEnJuego.push(jug); //Se situa el jugador al final del array
        jug.turnoJ1(btnAdd,btnStop); //Si es J1 y juega se habilitan los botones
      } else this.siguienteTurno(); //Si no juega se elimina de la ronda y se pasa el turno
    }
  }
  delaySiguienteTurno(jug){
    let id = setTimeout(()=>{
      clearTimeout(id);
      jug.setRecuadro(false);
      this.siguienteTurno();
    },1000);
  }
  resolverPartida(){
    if(this.banca.getJuega()){ //TURNO DE LA BANCA
      this.banca.setRecuadro(true);
      this.banca.desvelarCartaBanca();
      this.jugsEnJuego.push(this.banca);
      this.delaySiguienteTurno(this.banca);
    } else { //RESOLUCIÓN DE LA PARTIDA
      let finalistas = this.getFinalista();//Generar array de finalistas filtrados por el total más alto con funcion
      if(finalistas.length==1){//Solo hay un jugador
        let blackjack = finalistas[0].esBlackJack(); //(verificar BlackJack)
        if(finalistas[0].getNombre()=="J1"){//Es J1
          if(blackjack) this.setResultado("¡Has Ganado con un BlackJack! :D",1,true);
          else this.setResultado("¡Has Ganado! :D",1,false);
        } else if(finalistas[0].getNombre()=="Banca") this.setResultado("Ha Ganado la Banca :(",-1);//Es la banca
        else this.setResultado("Ha ganado "+finalistas[0].getNombre()+" :(",-1); //Es un CPU
      } else if(finalistas.length>=1){ //Hay más de un jugador
        let numBlackJack = 0;
        finalistas.map(j=>{if(j.esBlackJack())numBlackJack++});
        if(finalistas[0].getTotal()==21 && numBlackJack==1){ //Desempate: El empate es a 21 y solo uno es blackjack
          let ganador = finalistas.filter(j=>j.esBlackJack());
          if(ganador.getNombre()=="J1") this.setResultado("¡Has Desempatado con un BlackJack! :D",1,true); //Es J1
          else if(ganador.getNombre()=="J1") this.setResultado("La Banca ha Desempatado con un BlackJack :(",-1); //Es la banca
          else this.setResultado(ganador.getNombre()+" ha Desempatado con un BlackJack :(",-1); //Es un CPU
        } else { //Empate: Else
          let estaJ1 = false;
          finalistas.map(j=>{if(j.getNombre()=="J1")estaJ1=true});
          if(estaJ1) this.setResultado("Has empatado :|",0);
          else this.setResultado("Has perdido",-1);
        }
      } else this.setResultado("No ha ganado nadie XD",0);
    }
  }
  getFinalista(){
    let arrayFinalistas = [];
    this.jugadores.map(j=>{arrayFinalistas.push(j)});
    arrayFinalistas.push(this.banca);
    let max = 0;
    arrayFinalistas.map(j=>{
      if(j.getTotal()<=21 && j.getTotal()>max) max = j.getTotal();
    });
    return arrayFinalistas.filter(j=>j.getTotal()==max);
  }
  setResultado(msj,res,bj){
    alert(msj);
    let apuesta = this.getJ1().getApuesta();
    if(res==1){
      if(bj) apuesta*=1.5;
      alert("Ganas "+apuesta+" fichas");
    } else if(res==-1) alert("Pierdes "+apuesta+" fichas");
    else alert("Recuperas tus fichas apostadas");
  }
  //verificarBlackJack(){this.finalizado=this.banca.esBlackJack();}

  getFaseTurnos(){return this.faseTurnos;}
  getApuestaMin(){return this.apuestaMin;}
  getApuestaMax(){return this.apuestaMax;}
  getJ1(){return this.jugadores[this.indexJ1];}

  setFaseTurnos(){this.faseTurnos=true;}
}

//-------------------------------------------------------------------------------------------------

let contenInicio = document.getElementById("pantallaInicio");
let contenPartida = document.getElementById("partida");
let contenBanca = document.getElementById("contenedorBanca");
let contenJugadores = document.getElementById("contenedorJugadores");
let contenAcciones = document.getElementById("contenedorAcciones");

let btnIniciarPartida = document.getElementById("btnIniciarPartida");
let btnAdd = document.getElementById("btnAdd");
let btnStop = document.getElementById("btnStop");

let partida;

//-------------------------------------------------------------------------------------------------

btnIniciarPartida.addEventListener("click",()=>{
  let aMin = document.getElementById("apuestaMin").value;
  let aMax = document.getElementById("apuestaMax").value;
  let jug = document.getElementById("numJugadores").value;
  if(aMin.length==0 || aMax.length==0 || jug.length==0) alert("Debes rellenar todos los campos");
  else if(aMin<1 || aMin>20 || aMax<100 || aMax>500 || jug<1 || jug>3) alert("Debes respetar las cantidades mínimas y máximas");
  else{
    contenInicio.setAttribute("hidden","true");
    contenPartida.removeAttribute("hidden");
    partida = new Partida(aMin,aMax,jug, btnAdd, btnStop);
    partida.generarJugadores(contenBanca,contenJugadores);
  }
});

btnAdd.addEventListener("click",()=>{
  if(partida.getFaseTurnos()){ //Fase de Turnos:
    partida.repartir([{jug:partida.getJ1(),bool:true}],true);
    btnAdd.setAttribute("disabled","true");
    btnStop.setAttribute("disabled","true");
  } else { //Fase de Apuestas:
    let divApuesta = document.getElementById("apuesta");
    let apuesta = parseInt(divApuesta.value);
    if(!isNaN(apuesta) && apuesta>=partida.getApuestaMin() && apuesta<=partida.getApuestaMax()){
      btnAdd.setAttribute("disabled","true");
      btnStop.setAttribute("disabled","true");
      divApuesta.setAttribute("disabled","true");
      btnAdd.value="Robar Carta";
      btnStop.value="Plantarse";
      partida.situarApuestaJ1(apuesta);
      partida.generarApuestas();
      partida.reparticionInicial();
    } else if(isNaN(apuesta) || apuesta.length==0) alert("Apuesta no válida");
    else if(apuesta<partida.getApuestaMin()) alert("La apuesta es menor a la mínima");
    else if(apuesta>partida.getApuestaMax()) alert("La apuesta es mayor a la máxima");
  }
});

btnStop.addEventListener("click",()=>{
  if(partida.getFaseTurnos()){ //Fase de Turnos:
    partida.getJ1().plantarse();
    btnAdd.setAttribute("disabled","true");
    btnStop.setAttribute("disabled","true");
    partida.siguienteTurno();
  } else { //Fase de Apuestas:
    partida = "";
    contenPartida.setAttribute("hidden","true");
    contenInicio.removeAttribute("hidden");
  }
});