window.addEventListener("DOMContentLoaded",()=>{
  document.getElementById('formulario').addEventListener('submit',(e)=>{
    if(document.getElementsByTagName('input')[0].checked){
      open("https://en.wikipedia.org/wiki/Main_Page");
    } else {
      e.preventDefault();
      location.href="https://en.wikipedia.org/wiki/Main_Page";
    }
  });
});

