window.addEventListener("load",()=>{
  let section = document.getElementsByTagName("SECTION")[0];
  let inputs = document.querySelectorAll("input");

  for(let inp of inputs){
    inp.addEventListener("click",()=>{
      section.removeChild(inp.previousElementSibling);
      section.removeChild(inp);
    });
  }
});