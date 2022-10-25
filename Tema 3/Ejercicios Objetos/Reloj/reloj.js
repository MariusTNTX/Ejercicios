setInterval(() => {
  let t = new Date().getHours();
  let h = (t<10) ? '0'+ t : t;
  t = new Date().getMinutes();
  let m = (t<10) ? '0'+ t : t;
  t = new Date().getSeconds();
  let s = (t<10) ? '0'+ t : t;
  t = Math.floor(new Date().getMilliseconds()/10);
  let l = (t<10) ? '0'+ t : t;
  document.getElementById("txtReloj").value = `${h}:${m}:${s}:${l}`;
},10);