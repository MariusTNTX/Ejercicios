class Presentacion{

  /* ATRIBUTOS */
  constructor(){
    this.misFotos = [
      "<img src='imagenes/foto1.jpg' alt='1. India - Agra - El Taj Mahal.'>",
      "<img src='imagenes/foto2.jpg' alt='2. Albania - Region de Ballsh.'>",
      "<img src='imagenes/foto3.jpg' alt='3. Atenas- Partenón.'>",
      "<img src='imagenes/foto4.jpg' alt='4. Bélgica - Amberes.'>",
      "<img src='imagenes/foto5.jpg' alt='5. Costa Rica - Parque nacional de la Amistad.'>",
      "<img src='imagenes/foto6.jpg' alt='6. Egipto - Templo de Abu Simbel.'>",
      "<img src='imagenes/foto7.jpg' alt='7. España - Albacete ciudad.'>",
      "<img src='imagenes/foto8.jpg' alt='8. España - Tarragona - Acueducto romano.'>"
    ];
    this.indice = 0;
  }

  /* FUNCIONES */
  mostrarInicial(){
    this.indice=0;
    return this.misFotos[0];
  }
  mostrarFinal(){
    this.indice=7;
    return this.misFotos[7];
  }
  mostrarSiguiente(){
    if(this.indice+1<7) this.indice++;
    return this.misFotos[this.indice];
  }
  mostrarAnterior(){
    if(this.indice-1>0) this.indice--;
    return this.misFotos[this.indice];
  }
}

window.addEventListener("load",()=>{
  let presen = new Presentacion();
  let divFoto = document.getElementById("fotoActual");
  let titulo = document.getElementById("mititulo");

  document.getElementById("inicio").addEventListener("click",()=>{
    divFoto.innerHTML = presen.mostrarInicial();
    titulo.innerHTML = divFoto.firstChild.alt;
  });
  document.getElementById("anterior").addEventListener("click",()=>{
    divFoto.innerHTML = presen.mostrarAnterior();
    titulo.innerHTML = divFoto.firstChild.alt;
  });
  document.getElementById("siguiente").addEventListener("click",()=>{
    divFoto.innerHTML = presen.mostrarSiguiente();
    titulo.innerHTML = divFoto.firstChild.alt;
  });
  document.getElementById("final").addEventListener("click",()=>{
    divFoto.innerHTML = presen.mostrarFinal();
    titulo.innerHTML = divFoto.firstChild.alt;
  });
});