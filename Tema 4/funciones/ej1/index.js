let txtField = document.getElementById("txtField");
let addInic = document.getElementById("addInic");
let addFin = document.getElementById("addFin");
let extInic = document.getElementById("extInic");
let extFin = document.getElementById("extFin");
let txtArea = document.getElementById("txtArea");

let texto = new Array();

mostrarArray = function(array){
  console.log(array);
  txtArea.textContent = "";
  for(elem of array) txtArea.textContent += elem + " ";
  txtField.value="";
}

addInic.addEventListener("click",()=>{
  texto.unshift(txtField.value);
  mostrarArray(texto);
});

addFin.addEventListener("click",()=>{
  texto.push(txtField.value);
  mostrarArray(texto);
});

extInic.addEventListener("click",()=>{
  texto.shift();
  mostrarArray(texto);
});

extFin.addEventListener("click",()=>{
  texto.pop();
  mostrarArray(texto);
});