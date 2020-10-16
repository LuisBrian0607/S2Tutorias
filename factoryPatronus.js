class Beneficios{
    constructor(){
        this.generarBeneficio=function(type){
            let beneficio;
            if(type==='promocion' || type==='descuento') beneficio=new Descuentos_Compras();
            else if(type=== 'viaje')beneficio=new Vacaciones();
            beneficio.reconocimiento=function(){
                return `Felicidades has recibido un ${type} por ser trabajador del mes`;
            }
            return beneficio;
        }
    }
}

class Descuentos_Compras{
    constructor(){
          this._type='descuento';
          this.tienda=function(){
              return 'oferta solo en tiendas metro 50% de descuento';
          }
    }
}

class Vacaciones{
    constructor(){
        this._type='viaje';
        this.destino=function(destinito){
            return 'Rumbo a '+destinito;
        }
    }
    
}

const benefic=new Beneficios();

const vale_compras=benefic.generarBeneficio('descuento');
const vale_viaje=benefic.generarBeneficio('viaje');

console.log('Felicidades has recibido un premio',vale_compras.reconocimiento());
console.log('Ahorra en tus compras',vale_compras.tienda());
console.log('Aerolineas Soyus', vale_viaje.destino('Francia'));