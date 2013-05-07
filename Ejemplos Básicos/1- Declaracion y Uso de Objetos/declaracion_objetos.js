

// 1. Declaracion de metodos - Forma # 1

	function calcularArea(radio) {


		return radio * radio * Math.PI;

	}




// 2. Declaracion de objeto en Javascript - Forma # 1 

	var circulo = {};

	circulo.radio = 9;
	circulo.color = 'red';


	circulo.area  = calcularArea(circulo.radio);  // De esta forma, se almacena el resultado de la llamada a la funcion calcularArea en la variable.



// 3. Declaracion de objeto en Javascript - Forma # 2

	var circulo = {

		radio: 9,
		area: calcularArea // De esta forma, se almacena la función dentro de la variable area y si deseamos
		                   // conocer el area se obtiene de la forma que se observa en la parte inferior.

		                   // Esto es una referencia al Método Global calcularArea

	};


	var area = circulo.area(circulo.radio);


	var rectangulo = {

		ancho: 9,
		alto: 5,
		color: 'blue'


	};


// 4. Declaracion de objeto junto a método local

	var circulo = {


		radio: 9,
		area: function() {

			return this.radio * this.radio * Math.PI; // El operador "this" indica que el valor utilizado para el calculo
			                                          // es el almacenado en la variable radio del objeto actual.

		}

	}


// 5. Declaracion de una clase Circulo para ser instanciada N veces

function Circulo(radio) {


	this.radio = radio;

	this.area = function(){


		return radio * radio * Math.PI;

	}

}

var redondo = new Circulo(2); // Instanciacion de la clase Circulo


alert("El area de redondo es: " + redondo.area()); // Devuelve 12.566
