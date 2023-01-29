window.addEventListener("load",()=>{
  let section = document.getElementsByTagName("SECTION")[0];
  let inputs = document.querySelectorAll("input");

  for(let inp of inputs){
    inp.addEventListener("click",(e)=>{
      console.log(e);
      section.removeChild(e.target.previousElementSibling);
      section.removeChild(e.target);
    });
  }
});