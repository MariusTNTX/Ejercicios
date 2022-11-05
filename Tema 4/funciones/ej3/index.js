let textoIni = document.getElementById("textoIni");
let boton = document.getElementById("boton");
let tabla = document.getElementById("tabla");

let arraySolucion=[], arrayAbecedario = "abcdefghijklmnñopqrstuvwxyz";

textoValido = function(texto){
  if(isNaN(texto)) return true;
  return false;
}

transformarStringBasico = function(cadena){
  //Devuelve cadena sin mayusculas, acentos ni dieresis
  cadena = cadena.toLowerCase();
  reempl = "áéíóúäëïöüàèìòù";
  letras = "aeiouaeiouaeiou";
  for(let i=0; i<reempl.length; i++){
    while(cadena.includes(reempl.charAt(i))){
      cadena = cadena.replace(reempl.charAt(i),letras.charAt(i));
      console.log(reempl.charAt(i));
    }
  }
  console.log(cadena);
  return cadena;
}

comprobarCaracter = function(letra){
  //Devuelve el indice de la posición ocupada por la letra, si no está: -1
  if(arrayAbecedario.includes(letra)) return arrayAbecedario.indexOf(letra);
  return -1;
}

imprimirTabla = function(cadena){
  //Imprime la tabla de frecuencias
  tabla.innerHTML="<table id='frecuencias'></table>";
  let frec = document.getElementById("frecuencias");
  for(let i=0; i<arrayAbecedario.length; i++){
    frec.innerHTML+="<tr><th>"+arrayAbecedario.charAt(i)+"</th><td>"+arraySolucion[i]+"</td></tr>"; //NO HACE BIEN LA TABLA ----------------------------------------------
  }
}

boton.addEventListener("click",()=>{
  tabla.innerHTML="";
  for(let i=0; i<arrayAbecedario.length; i++) arraySolucion[i]=0;
  cad = textoIni.value;
  if(textoValido(cad)){
    cad = transformarStringBasico(cad);
    for(let i=0; i<cad.length; i++){
      if(comprobarCaracter(cad.charAt(i))!=-1) arraySolucion[comprobarCaracter(cad.charAt(i))]++;
    }
    imprimirTabla(cad);
  } else alert("No se ha introducido un texto, inténtalo de nuevo");
})