let bloques = document.getElementById("bloques");
let r, g, b;

function generarColores(num){
  for(let i=0; i<num; i++){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    if(r+g+b>(255*3)/2){
      r2 = 0;
      g2 = 0;
      b2 = 0;
    } else {
      r2 = 255;
      g2 = 255;
      b2 = 255;
    }
    bloques.innerHTML+=`<span class="bloque" style='background-color: rgb(${r},${g},${b}); color: rgb(${r2},${g2},${b2});'>${r},${g},${b}</span>`;
  }
}

generarColores(100);

window.addEventListener("scroll",()=>{
  if(window.innerHeight+window.scrollY >= document.body.clientHeight){
    generarColores(30);
  }
});