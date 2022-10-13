/* Suponiendo que hemos introducido una cadena por teclado que representa una frase (palabras separadas por espacios), realiza un programa que cuente cuantas palabras tiene. */

/* El contador se inicializa a 1 ya que el número de palabras será el número de espacios más 1 */
let str,count=1;
do{
  str = prompt("Introduce una frase").trim();
  if(!str.includes(" ") || str.indexOf(" ") == str.lastIndexOf(" ")) alert("No has introducido una frase válida, intentalo de nuevo");
  if(str.length==0) alert("No has introducido una letra, intentalo de nuevo");
} while(str.length==0 || !str.includes(" ") || str.indexOf(" ") == str.lastIndexOf(" "));

for(let i=0; i<str.length; i++){
  if(str.substring(i,i+1)==" ") count++;
}

alert(`Número de palabras de la frase ${str} = ${count}.`);
document.write(`Número de palabras de la frase ${str} = ${count}.`);