class Producto{
  constructor(cant, pre){
    this.cantidad = cant;
    this.precio = pre;
  }
  getCantidad(){
    return this.cantidad;
  }
  getPrecio(){
    return this.precio;
  }
  getPrecioFinal(){
    return this.cantidad*this.precio;
  }
  setCantidad(cant){
    this.cantidad=cant;
  }
  setPrecio(pre){
    this.precio=pre;
  }
}

let productos = [], precioFin = 0, cont = 1, p;
let txtCant = document.getElementById("txtCant");
let txtPre = document.getElementById("txtPre");
let btnIntr = document.getElementById("btnIntr");
let btnImpr = document.getElementById("btnImpr");
let txtArea = document.getElementById("txtArea");

btnIntr.addEventListener("click",()=>{
  let cant = txtCant.value;
  let pre = txtPre.value;
  productos.push(new Producto(cant, pre));
  txtCant.value = "";
  txtPre.value = "";
});

btnImpr.addEventListener("click",()=>{
  txtArea.textContent+=`*************** CANTIDAD ****** PRECIO ******** TOTAL\n\n`;
  while(productos.length>0){
    p = productos[0];
    txtArea.textContent+=`Producto ${cont}\tx${p.getCantidad()}\t\t${p.getPrecio()}€\t\t${p.getPrecioFinal()}€\n`;
    precioFin+=p.getPrecioFinal();
    cont++;
    productos.shift();
  }
  txtArea.textContent+=`\nPRECIO FINAL\t\t\t\t\t${precioFin}€`;
});