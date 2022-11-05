let numArray=new Array(), randNum;

for(let i=0; i<7; i++){
  randNum = Math.floor(Math.random()*9+1);
  if(numArray.includes(randNum)) i--;
  else numArray[i]=randNum;
}

document.write("<h1 style='text-align:center;'>7 Números Diferentes:</h1>");

document.write("<h2 style='text-align:center;color:blue;'>");
for(let e of numArray) document.writeln(e+" ");
document.write("</h2>");