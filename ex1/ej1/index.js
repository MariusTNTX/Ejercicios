let txt, num, id, count=0, letras="";

//A
//Se verifica que se haya escrito algo y que no sea un número
do{
  txt = prompt("Escribe un texto:");
  if(txt.length==0 || !isNaN(txt)) alert("No has escrito un texto, inténtalo de nuevo");
} while(txt.length==0 || !isNaN(txt));

//B
//Se verifica que no se haya escrito un texto y que el numero sea positivo
do{
  num = prompt("Escribe un número positivo:");
  if(isNaN(num)) alert("No has escrito un número, inténtalo de nuevo");
  else if(num<=0) alert("No has escrito un número positivo, inténtalo de nuevo");
} while(isNaN(num) || num<=0);

//El numero se redondea por si es decimal
num = Math.round(num); //Redondear num

//C
//Se obtiene un array del text introducido
arrayTxt = txt.split('');
//Se recorre y se añaen tantos puntos como el número indicado
for(c in arrayTxt){
  for(let i=0; i<num; i++){
    arrayTxt[c] = '.' + arrayTxt[c];
  }
}

//Se vuelve a transformar en texto y se imprime
txt = arrayTxt.join('');
document.title = txt;

//D
//Cada 100 milisegundos:
id = setInterval(()=>{
  //Si el caracter posterior a las letras acumuladas no un punto se añade la letra a las letras acumuladas
  if(txt.charAt(count)!='.'){
    letras+=txt.charAt(count);
  } 
  //Se resta el primer punto de la cadena
  txt = txt.substr(count+1);
  //Se imprime en el titulo
  document.title = letras+txt;

  //E
  //Si no hay puntos se detiene el intervalo:
  if(!txt.includes('.')){
    clearInterval(id);
  }
},100);