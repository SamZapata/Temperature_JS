//esto será codigo javascript
/*	Author: SamZapata
	Languaje: JavaScript
	Date: Febrero de 2018
	Program: Archivo de Prueba 1 - Kelvin Weather
	Description: this test is taked from Codecademy, intro to javascript.
	And so, I continus add my code...*/


//i. Definición de Clase

//Pattern
class Temperature {

	constructor(valorIn) {
		this._valorIn = valorIn;
		//this._celsius = celsius;
		//this._kelvin = kelvin;
		//this._fahrenheit = fahrenheit;
		
	}

	get valorIn () {
		return this._valorIn;
	}

	
	/*METODOS*/

	//Calcula de Kelvin a Celsius
	fromKelvinToCelsius(gradeIn) {

		if (gradeIn >= 0 || gradeIn <= 0) {
			this._valorIn = gradeIn - 273;			
		} else {
			var error = document.querySelector('error');
			error.textContent = "Número de Entrada Incorrecto";
		}

	}

	fromKelvinToFahrenheit(gradeIn) {
		if (gradeIn >= 0 || gradeIn <= 0 ) {
			this._valorIn = Math.floor((gradeIn*(9/5))-460);
		} else {
			var error = document.querySelector('error');
			error.textContent = "Número de Entrada Incorrecto";
		}
	}

	//Calcula de celsius a Fahrenheit
	fromCelsiusToFahrenheit(gradeIn) {
		
		//el if permite verificar que realmente sea un número lo que se ingresa
		if (gradeIn >= 0 || gradeIn <= 0 ) {
			let auxCelsius = gradeIn - 273;
			this._valorIn = Math.floor(((auxCelsius)*(9/5))+32);

		} else {
			var error = document.querySelector('error');
			error.textContent = "Número de Entrada Incorrecto";
		}
	}

	showConversionKTC() {
		let showCelsius = document.querySelector('celsius');
		showCelsius.textContent = this._valorIn;
	}
	
}

//Funciones para ingresar dato y hacer la respectiva conversión

function getKelvin() {
    
    var gradeIn = document.getElementById("field").value;

    const calculaTemperature = new Temperature(gradeIn);

    calculaTemperature.fromKelvinToFahrenheit(gradeIn);
	var showFahrenheit = document.querySelector('fahrenheit');
	showFahrenheit.textContent = calculaTemperature.valorIn;

	calculaTemperature.fromKelvinToCelsius(gradeIn);
	calculaTemperature.showConversionKTC();

    //
    //document.getElementById("demo").innerHTML = field;
    //return field;

}

function getCelsius() {
	
	var gradeIn = document.getElementById("field").value;

	const calculaTemperature = new Temperature(gradeIn);

	calculaTemperature.fromCelsiusToFahrenheit(gradeIn);
	var showFahrenheit_ = document.querySelector('fahrenheit');
	showFahrenheit_.textContent = calculaTemperature.valorIn;
}

//let gradeIn = prompt('Ingresa la temperatura en Kelvin: ');
	

//var showCelsius = document.querySelector('celsius');
//showCelsius.textContent = calculaTemperature.valorIn;

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}

//document.getElementById('celsius').innerHtml=gradeIn;



/*Forma inicial de aprendizaje a partir de acá =) ...  borre una parte :/

//Define variables y calcula su valor sobre las ecuaciones ya establecidas
let kelvin = "";
let celsius = "";
let fahrenheit = "";

//*i. Programa para pedir temperatura kelvin y mostrarla en celcius y farenheit. 

kelvin = prompt('Ingresa la temperatura en Kelvin: ')

//Resultado por consola
//console.log(celsius,fahrenheit);

//Se muestran los resultados correspondientes
if (kelvin >= 0 || kelvin <= 0) {
	//Calcula Celsius
	

	//Calcula Fahrenheit
	fahrenheit = Math.floor((celsius*(9/5))+32);
	showFahrenheit = document.querySelector('fahrenheit');
	showFahrenheit.textContent = fahrenheit;
} else {
	error = document.querySelector('error');
	error.textContent = "El número no es valido";
}
*/