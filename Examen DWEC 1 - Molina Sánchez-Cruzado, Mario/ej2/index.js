class Boleto{
  //A1
  constructor(){
    //Se instancia el array numeros del boleto
    this.numeros = [];
    //Cada una de las 6 veces se genera un número aleatorio y se verifica si está en el array. Si está lo añade y si no se resta el contador de vueltas.
    for(let i=0; i<6; i++){
      let num = Math.floor(Math.random()*(49)+1);
      if(!this.numeros.includes(num)){
        this.numeros.push(num);
      } else {
        i--;
      }
    }
  }

  //A2
  //Devuelve true si ambos objetos tienen el mismo contenido
  Iguales(boleto){
    return this.numeros == boleto.getNumeros();
  }

  //Devuelve el array nuemros
  getNumeros(){
    return this.numeros;
  }
}


class SecuenciaBoletos{
  //B1
  constructor(){

    this.boletos = [];

    //Por cada una de las 100 veces se genera un boleto y se verifica que no sea igual a alguno de los anteriores. Si es único se añade al array, sino se resta el contador de vueltas.
    for(let i=0; i<100; i++){
      let repetido = false;
      let boleto = new Boleto();

      for(let b of this.boletos){
        if(boleto.Iguales(b)){
          repetido=true;
        }
      }
      
      if(repetido){
        i--;
      } else {
        this.boletos.push(boleto);
      }
    }
  }

  //B2
  //Recorre el array y muestra los números de 1 dígito con 3 espacios y los de 2 con 2 espacios
  Mostrar(){
    let txt="";
    for(let b of this.boletos){
      for(let n of b.getNumeros()){
        if(n < 10){
          txt += n+"&nbsp;&nbsp;&nbsp;";
        } else {
          txt += n+"&nbsp;&nbsp;";
        }
      }
      txt+='<br>';
    }
    document.write(txt);
  }
}

//Se instancia la secuencia y se muestra:
secuencia = new SecuenciaBoletos();
secuencia.Mostrar();