function grabarCookie(k,v,sec){
  let txt = k+"="+v;
  if(sec>=1) txt+="; expires="+new Date(new Date().getTime()+sec).toUTCString();
  document.cookie=txt;
}

function leerCookie(k){
  let cookies = {}, i, v;
  for(let c of document.cookie.split("; ")){
    i = c.split("=")[0];
    v = c.split("=")[1];
    cookies[i] = v;
  }
  return cookies[k];
}

function borrarCookie(k){
  document.cookie=k+"=0; expires="+new Date(0).toUTCString();
}