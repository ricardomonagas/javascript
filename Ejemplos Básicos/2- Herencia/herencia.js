
// 1. Declaracion de una clase Circulo para ser instanciada N veces

function Circulo(radio) {


	this.radio = radio;

	this.area = function(){


		return radio * radio * Math.PI;

	}

}

// En Javascript se utiliza la Herencia Prototípica, y esto implica ciertas cosas:

// * Un Objeto por defecto, siempre hereda sus métodos de otro Objeto, que se encuentra accesible a través del atributo prototype.
// * Uno puede cambiar, en tiempo de definición, de qué tipo de Objeto se hereda.
// * La Herencia prototípica es una cadena, si se hereda de un Objeto, a su vez éste heredará de otro objeto. Al final de la cadena, siempre se heredará del Objeto Object.


	Circulo.prototype.diametro = function() {

		return this.radio * 2;

	}


	Circulo.prototype.circunferencia = function() {


		return Math.PI * this.diametro();

	}

	var circulo = new Circulo(2);

	circulo.area();

	circulo.diametro();

	circulo.circunferencia();

	// Con el objeto prototype se pudo modificar la clase Circulo para añadir los metodos diametro y circunferencia.
	// Entonces para aplicar herencia, debemos modificar el objeto prototype por completo. Como puede ver en la parte inferior:

	function Animal() {
	
		this.ojos = 2;
		this.alimentacion = 'hervibero';

	}


	function Humano() {


		this.alimentacion = 'omnivoro';

	}


	Humano.prototype = new Animal();

	var humano = new Humano();

	alert("La alimentaci&oacute;n de humano es: " + humano.ojos); // Devuelve 2
																  // La clase Humano ha heredado la variable ojos
