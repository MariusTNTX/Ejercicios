let txtCadena = document.getElementById("txtCadena");
let txtNumero = document.getElementById("txtNumero");
let btnCifrar = document.getElementById("btnCifrar");
let btnDescifrar = document.getElementById("btnDescifrar");
let txtArea = document.getElementById("txtArea");
let cad, num, l;
let arrayAbecedario = "abcdefghijklmnñopqrstuvwxyz";

transformarStringBasico = function(cadena){
  cadena = cadena.toLowerCase();
  reempl = "áéíóúäëïöüàèìòù";
  letras = "aeiouaeiouaeiou";
  for(let i=0; i<reempl.length; i++){
    while(cadena.includes(reempl.charAt(i))){
      cadena = cadena.replace(reempl.charAt(i),letras.charAt(i));
    }
  }
  return cadena;
}

cifrarCaracter = function(letra, despl){
  let index = arrayAbecedario.indexOf(letra);
  console.log("Index de l: "+index);
  if(arrayAbecedario.includes(letra)){
    if(index + despl >= arrayAbecedario.length){
      index = (index + despl) - arrayAbecedario.length;
      console.log("Nuevo index fuera del length: "+index);
      return arrayAbecedario.charAt(index);
    }
    index += despl;
    console.log("Nuevo index dentro del length: "+index);
    return arrayAbecedario.charAt(index);
  }
  return -1;
}

descifrarCaracter = function(letra, despl){
  let index = arrayAbecedario.indexOf(letra);
  console.log("Index de l: "+index);
  if(arrayAbecedario.includes(letra)){
    if(index - despl < 0){
      index = arrayAbecedario.length - (despl - index);
      console.log("Nuevo index fuera del length: "+index);
      return arrayAbecedario.charAt(index);
    }
    index -= despl;
    console.log("Nuevo index dentro del length: "+index);
    return arrayAbecedario.charAt(index);
  }
  return -1;
}

activarBoton = function(transformar){
  console.log("activarBoton()");
  txtArea.textContent="";
  cad = txtCadena.value;
  num = parseInt(txtNumero.value);

  if(isNaN(cad)){
    console.log("texto correcto");
    cad = transformarStringBasico(cad);
    console.log("Cadena transformada: "+cad);
    console.log("");
    for(let i=0; i<cad.length; i++){
      console.log("valores de l("+i+"):");
      l = transformar(cad.charAt(i),num);
      console.log("valor final de l: "+l);
      console.log("");
      if(l!=-1) txtArea.textContent+=l;
      else txtArea.textContent+=cad.charAt(i);
    }
  } else alert("No se ha introducido un texto, inténtalo de nuevo");
}

btnCifrar.addEventListener("click",()=>{activarBoton(cifrarCaracter)});
btnDescifrar.addEventListener("click",()=>{activarBoton(descifrarCaracter)});