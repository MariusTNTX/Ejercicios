let texto = document.getElementById("caja");
let btnAnadir = document.getElementById("anadir");
let chkDiv = document.getElementById("checkContainer");
let selector = document.getElementById("selector");

btnAnadir.addEventListener("click",()=>{
  if(texto.value.length>0){
    chkDiv.innerHTML+=`<input type="checkbox" name="check" id="${texto.value.toLowerCase()}"><label for="${texto.value.toLowerCase()}">${texto.value}</label><br>`;
  }
})