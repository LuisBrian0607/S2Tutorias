class Comidas{
    constructor(precio,cantidad){
        this.precio=precio;
        this.cantidad=cantidad;
        this.cuenta=function pedido(){
             return this.cantidad*this.precio;
        }
    }
       
}

let ceviche=new Comidas(14.5,2);
console.log(ceviche.cuenta());