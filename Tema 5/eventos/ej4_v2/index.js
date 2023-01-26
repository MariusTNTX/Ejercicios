window.addEventListener("load",()=>{ 
  document.body.removeChild(document.getElementById("cargando"));
});

let div = document.getElementById("imagenes");

window.addEventListener("scroll",()=>{
  /* console.log(document.documentElement.clientHeight);
  console.log(document.body.clientHeight);
  console.log(window.scrollY);*/

  /* console.log(document.body.clientHeight);
  console.log(document.body.clientTop);
  console.log(document.body.offsetHeight);
  console.log(document.body.offsetTop);
  console.log(document.body.scrollTop);
  console.log(document.body.scrollHeight); */

  console.log(div.scrollTop);
  console.log(div.clientHeight);
  console.log(div.scrollHeight);

  /* console.log(window);
  console.log(scrollY); */

  console.log("---");
});

