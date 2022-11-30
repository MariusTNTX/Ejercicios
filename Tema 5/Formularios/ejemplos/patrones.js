let txtCodigo = document.getElementById("codigo");
let chkCrtr = document.getElementById("caracteres");
let chkVocal = document.getElementById("vocal");
let chkImpar = document.getElementById("impar");
let chkPar = document.getElementById("par");
let chkPunto = document.getElementById("punto");

let expCrct = new RegExp("^.{8}$");
let expVocal = new RegExp("^[AEIOU]");
let expImpar = new RegExp("^.[13579]");
let expPar = new RegExp("^..[02468]");
let expPunto = new RegExp("^...[\.]");

txtCodigo.addEventListener("keyup", () => {
  let txt = txtCodigo.value;

  if(expCrct.test(txt)) chkCrtr.setAttribute("checked", "true");
  else chkCrtr.removeAttribute("checked");

  if(expVocal.test(txt)) chkVocal.setAttribute("checked", "true");
  else chkVocal.removeAttribute("checked");

  if(expImpar.test(txt)) chkImpar.setAttribute("checked", "true");
  else chkImpar.removeAttribute("checked");

  if(expPar.test(txt)) chkPar.setAttribute("checked", "true");
  else chkPar.removeAttribute("checked");

  if(expPunto.test(txt)) chkPunto.setAttribute("checked", "true");
  else chkPunto.removeAttribute("checked");
});