let txtNumero= document.getElementById("txtNumero");
let btnNumero = document.getElementById("btnNumero");
let txtLetra = document.getElementById("txtLetra");

let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

validarNum = function(numero){
  if(isNaN(numero)){
    alert("No has introducido un número, inténtalo de nuevo");
    return false;
  } else if(numero.length!=8){
    alert("No has introducido 8 dígitos, inténtalo de nuevo");
    return false;
  }
  return true;
}

getLetra = function(numero){
  return letra.charAt(numero%23);
}

btnNumero.addEventListener("click",()=>{
  num = txtNumero.value;
  if(validarNum(num)) txtLetra.value = getLetra(num);
});