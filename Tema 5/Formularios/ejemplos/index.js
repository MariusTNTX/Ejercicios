let form1 = document.getElementById("formulario1");
let formularios = document.getElementsByTagName("form");
let form2 = formularios[1];

let b = document.getElementById("boton");
b.addEventListener("click",()=>{
  console.log("Has pulsado el botón");
});

form2.addEventListener("submit",(event)=>{
  console.log("Estas intentando enviar información al servidor");
  console.log(event);
  console.log("AT_TARGET: "+event.AT_TARGET);
  console.log("BUBBLING_PHASE: "+event.BUBBLING_PHASE);
  console.log("CAPTURING_PHASE: "+event.CAPTURING_PHASE);
  console.log("NONE: "+event.NONE);
  console.log("bubbles: "+event.bubbles);
  /* console.log("cancelBubble: "+event.cancelBubble); */
  console.log("cancelable: "+event.cancelable);
  console.log("composed: "+event.composed);
  /* console.log("composedPath: "+event.composedPath); */
  console.log("currentTarget: ");
  console.log(JSON.stringify(event.currentTarget));
  console.log("defaultPrevented: "+event.defaultPrevented);
  console.log("eventPhase: "+event.eventPhase);
  console.log("isTrusted: "+event.isTrusted);
  /* console.log("preventDefault: "+event.preventDefault);
  console.log("stopImmediatePropagation: "+event.stopImmediatePropagation);
  console.log("stopPropagation: "+event.stopPropagation); */
  console.log("submitter: ");
  console.log(JSON.stringify(event.submitter));
  console.log("target: ");
  console.log(JSON.stringify(event.target));
  console.log("timeStamp: "+event.timeStamp);
  console.log("type: "+event.type);
  alert("");
});