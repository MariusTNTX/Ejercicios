//Función Añadir Tarea:
function addTask(list, txt){
  //Tarea
  let task = document.createElement("li");
    //Span
    let span = document.createElement("span");
    span.textContent = txt;
    task.appendChild(span);
    //Anchor
    let anchor = document.createElement("a");
    anchor.setAttribute("href","#");
    anchor.textContent = 'quitar';
    task.appendChild(anchor);
  //Añadir a Lista
  list.appendChild(task);
  return task;
}

//----------------------------------------------------------------------------------------

//Al cargar la página se establecen los EventListeners
window.addEventListener("load",()=>{

  //Elementos Básicos
  let taskText = document.getElementById("tarea");
  let addButtom = document.getElementById("mas");
  let taskList = document.getElementById("lista");

  //Evento Botón Añadir:
  addButtom.addEventListener("click",(e)=>{

    //Se evita el submit previniendo el evento del click
    e.preventDefault();

    //Se almacena el texto de la nueva tarea y se elimina el original
    let txt = taskText.value;
    taskText.value = '';
    
    //Solo si hay texto escrito se añade la tarea
    if(txt.length > 0){

      //Se añade la nueva tarea
      let task = addTask(taskList,txt);

      //Al pulsar en quitar se eleminia la tarea
      task.lastElementChild.addEventListener("click",()=>{
        taskList.removeChild(task);
      });

      //Al pulsar en el texto se pone en primera posición
      task.firstElementChild.addEventListener("click",()=>{
        taskList.insertBefore(task,taskList.firstElementChild);
      });
    } 
  });
});