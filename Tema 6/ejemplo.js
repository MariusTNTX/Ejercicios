window.addEventListener("load",()=>{
  let section = document.getElementsByTagName("SECTION")[0];
  let parrafos = document.querySelectorAll("p");

  for(let parr of parrafos){
    parr.addEventListener("click",(e)=>{
      if(e.target.nodeName=='INPUT'){
        section.removeChild(e.target.parentNode);
      }
    });
  }
});