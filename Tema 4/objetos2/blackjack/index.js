class Carta{
  constructor(p,n){
    this.palo=p;
    this.num=n;
  }
  getPalo(){return this.palo;}
  getNumero(){return this.num;}
}

class Baraja{
  constructor(){
    this.palos=['Club','Diamond','Heart','Spade'];
    this.cartas=[];
    for(let p of this.palos){
      for(let i=1; i<=13; i++){
        this.cartas.push(new Carta(p,i));
      }
    }
    console.log(this.cartas);
  }

  generarBaraja(){
    this.cartas=[];
    for(let p of this.palos){
      for(let i=1; i<=13; i++){
        this.cartas.push(new Carta(p,i));
      }
    }
    console.log(this.cartas);
  }

  barajar(){
    let aux = [], rand;
    while(this.cartas.length>0){
      rand = Math.floor(Math.random()*this.cartas.length);
      aux.push(this.cartas[rand]);
      this.cartas.splice(rand,1);
    }
    this.cartas = aux;
    console.log("MAZO BARAJADO:");
    console.log(this.cartas);
  }

  sacarCarta(){return this.cartas.shift();}

  getBaraja(){return this.cartas;}
}

class Jugador{
  constructor(nombre){
    this.nombre = nombre;
    this.apuesta = 0;
    this.mazo = [];
    this.total = 0;
    this.juega = true;
  }

  situarApuesta(cantidad){this.apuesta = cantidad;}
  sumarCarta(carta, visible){
    let vis = (typeof(visible)==Boolean)?visible:true;
    this.mazo.push({'carta': carta, 'esVisible': vis});
    if(carta.getNumero()>=10) this.total+=10;
    else this.total+=carta.getNumero();
  }
  esBlackJack(){
    let as=false, diez=false;
    for(c of this.mazo){
      if(c['carta'].getNumero()==1) as=true;
      else if(c['carta'].getNumero()>=10) diez=true;
    }
    return (this.mazo.length==2 && as && diez);
  }

  getNombre(){return this.nombre;}
  getApuesta(){return this.apuesta;}
  getTotal(){return this.total;}
  getJuega(){return this.juega;}

  setApuesta(ap){this.apuesta=ap;}
  setJuega(j){this.juega=j;}
}

//-------------------------------------------------------

let apuestaMin=1, apuestaMax=500, apuesta, finalizado=false;

let jugadores = [new Jugador('J1'), new Jugador('J2')];
let banca = new Jugador('Banca');
let baraja = new Baraja();

//ESTABLECIMIENTO DE APUESTAS

  for(let j of jugadores){
    do{
      apuesta = prompt(`Apuesta de ${j.getNombre()} (min = ${apuestaMin}, max = ${apuestaMax}): `);
      if(isNaN(apuesta)) alert("No has introducido una cantidad, intentalo de nuevo");
      else if(apuesta<apuestaMin) alert("La apuesta es menor que la apuesta mínima establecida, intentalo de nuevo");
      else if(apuesta>apuestaMax) alert("La apuesta es mayor que la apuesta máxima establecida, intentalo de nuevo");
    } while(isNaN(apuesta) || apuesta<apuestaMin || apuesta>apuestaMax);
    j.setApuesta(apuesta);
    console.log(`Apuesta de ${j.getNombre()}: ${j.getApuesta()}`)
  }


//REPARTICIÓN INICIAL DE CARTAS (2 a cada jugador)

  //Se baraja el mazo
  baraja.barajar();

  //Se reparten 2 cartas a cada jugador
  for(let j of jugadores){
    j.sumarCarta(baraja.sacarCarta());
    j.sumarCarta(baraja.sacarCarta());
  }

  //Se reparten dos cartas a la banca (una visible y otra oculta)
  banca.sumarCarta(baraja.sacarCarta());
  banca.sumarCarta(baraja.sacarCarta(),false);

  //Se comprueba que los jugadores y la banca no tiene un blackjack
  for(let j of jugadores){
    if(j.esBlackJack()) finalizado=true;
  }
  if(banca.esBlackJack()) finalizado=true;


//RONDA DE LOS TURNOS DEL JUGADOR

  while(!finalizado){
    
  }

//TURNOS DE LA BANCA

