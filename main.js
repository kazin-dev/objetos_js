function Carro(modelo, fabricante, anoModelo, anoFabricante) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricante = anoFabricante;
}

function CarroEsportivo(modelo, fabricante, anoModelo, anoFabricante, potencia) {
    Carro.call(this, modelo, fabricante, anoModelo, anoFabricante);
    this.potencia = potencia;
}

function CarroAntigo(modelo, fabricante, anoModelo, anoFabricante, potencia){
    Carro.call(this, modelo, fabricante, anoModelo, anoFabricante);
    this.potencia = potencia;
}

CarroEsportivo.prototype = Object.create(Carro.prototype);
CarroEsportivo.prototype.constructor = CarroEsportivo;

CarroAntigo.prototype = Object.create(Carro.prototype);
CarroAntigo.prototype.constructor = CarroAntigo;

CarroEsportivo.prototype.acelerar = function(){
    console.log('Acelerando o carro esportivo ' + this.modelo +'...');
}

CarroAntigo.prototype.acelerar = function(){
    console.log('Ligando o carro ' + this.modelo +'...');
}

const carro1 = new Carro('Fiesta', 'Ford', 2005, 2004);
const carroEsportivo1 = new CarroEsportivo('Ferrari F430', 'Ferrari', 2009, 2008, '490 cv');
const carroAntigo1 = new CarroAntigo('Fusca', 'Volkswagen', 1973, 1972, '40 cv');


console.log(carro1);
console.log(carroEsportivo1);
console.log(carroAntigo1);
carroEsportivo1.acelerar();
carroAntigo1.acelerar();
