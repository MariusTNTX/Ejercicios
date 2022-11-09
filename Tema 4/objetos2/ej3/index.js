class Persona{
  constructor(edad){
    this.edad = edad;
  }
  getEdad(){
    return this.edad;
  }
  setEdad(edad){
    this.edad=edad;
  }
}

let div = document.getElementById("div");
let asistentes = [], numEdades = {'infan': 0, 'adoles': 0, 'adultos': 0};
let num = Math.floor(Math.random()*(50-5+1)+5), ingresos = 0, p;

div.innerHTML+=`<h1>Número total de personas: ${num}</h1>`;

for(let i=0; i<num; i++){
  asistentes.push(new Persona(Math.floor(Math.random()*(60-5+1)+5)));
}

while(asistentes.length>0){
  p = asistentes[0];
  if(p.getEdad()>=5 && p.getEdad()<=10){
    numEdades['infan']++;
    ingresos+=2;
  } 
  else if(p.getEdad()>=11 && p.getEdad()<=17){
    numEdades['adoles']++;
    ingresos+=4;
  } 
  else if(p.getEdad()>=18){
    numEdades['adultos']++;
    ingresos+=6;
  }
  asistentes.shift();
}

div.innerHTML+=`<h2>Número total de personas entre 5 y 10 años: ${numEdades['infan']}</h2>`;
div.innerHTML+=`<h2>Número total de personas entre 11 y 17 años: ${numEdades['adoles']}</h2>`;
div.innerHTML+=`<h2>Número total de personas mayores de 18 años: ${numEdades['adultos']}</h2>`;
div.innerHTML+=`<hr width="50%"><h1>Cantidad total recaudada: ${ingresos}€</h1>`;
div.innerHTML+=`<h2>(2 x ${numEdades['infan']} + 4 x ${numEdades['adoles']} + 6 x ${numEdades['adultos']})</h2>`;