const miliS=1000, miliMi=miliS*60, miliH=miliMi*60, miliD=miliH*24, miliMo=miliD*30, miliY=miliMo*12;
    let nochevieja = new Date(2023,0,1,0,0,0,0);
    let milisNochevieja = nochevieja.getTime();
    let anios = document.getElementById("anios");
    let meses = document.getElementById("meses");
    let dias = document.getElementById("dias");
    let tiempo = document.getElementById("tiempo");

    setInterval(() => {
      let ahora = new Date();
      let milisAhora = ahora.getTime();
      let milisRestantes = milisNochevieja - milisAhora;
      let milisAnios = Math.floor(milisRestantes/miliY);
      milisRestantes -= milisAnios*miliY;
      let milisMeses = Math.floor(milisRestantes/miliMo);
      milisRestantes -= milisMeses*miliMo;
      let milisDias = Math.floor(milisRestantes/miliD);
      milisRestantes -= milisDias*miliD;
      let milisHoras = Math.floor(milisRestantes/miliH);
      milisRestantes -= milisHoras*miliH;
      let milisMins = Math.floor(milisRestantes/miliMi);
      milisRestantes -= milisMins*miliMi;
      let milisSegs = Math.floor(milisRestantes/miliS);
      milisRestantes -= milisSegs*miliS;

      anios.innerHTML="Años: "+milisAnios;
      meses.innerHTML="Meses: "+milisMeses;
      dias.innerHTML="Días: "+milisDias;
      tiempo.innerHTML="Tiempo: "+`${milisHoras}:${milisMins}:${milisSegs}`;
    }, 100);