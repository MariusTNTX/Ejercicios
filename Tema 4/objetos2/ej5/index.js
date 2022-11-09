class Informe{
  constructor(codigo, tarea){
    this.codigo = codigo;
    this.tarea = tarea;
  }
  getCodigo(){
    return this.codigo;
  }
  getTarea(){
    return this.tarea;
  }
}

let informes = [], tareas = ['ADMINISTRATIVO', 'EMPRESARIAL', 'PERSONAL'], cont = 1, i;
let txtCod = document.getElementById("txtCod");
let txtTarea = document.getElementById("txtTarea");
let btnIntr = document.getElementById("btnIntr");
let btnImpr = document.getElementById("btnImpr");
let txtArea = document.getElementById("txtArea");

function codigoUnico(cod){
  for(inf of informes){
    if(inf.getCodigo()==cod) return false;
  }
  return true;
}

btnIntr.addEventListener("click",()=>{
  let codigo = txtCod.value;
  let tarea = txtTarea.value.toUpperCase();
  if(tareas.includes(tarea) && codigoUnico(codigo)){
    informes.unshift(new Informe(codigo, tarea));
    txtCod.value = "";
    txtTarea.value = "";
  } else if(!tareas.includes(tarea)) alert("La tarea debe ser:\n - Administrativo\n - Empresarial\n - Personal");
  else alert("Error: El código "+codigo+" ya existe.");
});

btnImpr.addEventListener("click",()=>{
  txtArea.textContent="";
  txtArea.textContent+=`\t\tID\tTAREA\n\n`;
  while(informes.length>0){
    i = informes[0];
    txtArea.textContent+=`Informe ${cont}\t${i.getCodigo()}\t${i.getTarea()}\n`;
    cont++;
    informes.shift();
  }
});