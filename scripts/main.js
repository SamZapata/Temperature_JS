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

	//Calcula de celsius a Kelvin
	fromCelsiusToKelvin(gradeIn) {
		
		//el if permite verificar que realmente sea un número lo que se ingresa
		if (gradeIn >= 0 || gradeIn <= 0 ) {			
			this._valorIn = gradeIn + 273;

		} else {
			var error = document.querySelector('error');
			error.textContent = "Número de Entrada Incorrecto";
		}
	}

	fromFahrenheitToCelsius(gradeIn) {
		
		if (gradeIn >= 0 || gradeIn <= 0 ) {
			this._valorIn = Math.floor((gradeIn - 32)*(5/9));

		} else {
			var error = document.querySelector('error');
			error.textContent = "Número de Entrada Incorrecto";
		}
		
	}

	fromFahrenheitToKelvin(gradeIn) {
		
		if (gradeIn >= 0 || gradeIn <= 0 ) {			
			this._valorIn = Math.floor((gradeIn + 460)*(5/9));

		} else {
			var error = document.querySelector('error');
			error.textContent = "Número de Entrada Incorrecto";
		}
	}

	showConversionKTC() {
		let showCelsius_value = document.querySelector('celsius-value');
		showCelsius_value.textContent = this._valorIn;
	}
	
}

//Funciones para ingresar dato y hacer la respectiva conversión

function getKelvin() {
    
    var gradeIn = document.getElementById("field").value;

    const calculaTemperature = new Temperature(gradeIn);

    //To_Faherenheit
    var showFahrenheit_name = document.querySelector('fahrenheit-name');
    showFahrenheit_name = 'Fahrenheit';
    calculaTemperature.fromKelvinToFahrenheit(gradeIn);
	var showFahrenheit_value = document.querySelector('fahrenheit-value');
	showFahrenheit_value.textContent = calculaTemperature.valorIn;

	//To_Celsius
	var showCelsius_name = document.querySelector('celsius-name');
	showCelsius_name = 'Celsius';
	calculaTemperature.fromKelvinToCelsius(gradeIn);
	calculaTemperature.showConversionKTC();

    //
    //document.getElementById("demo").innerHTML = field;
    //return field;

}

function getCelsius() {
	
	var gradeIn = document.getElementById("field").value;

	const calculaTemperature = new Temperature(gradeIn);

	//To_Fahrenheit
	var showFahrenheit_name = document.querySelector('fahrenheit-name');
	showFahrenheit_name = 'Fahrenheit';
	calculaTemperature.fromCelsiusToFahrenheit(gradeIn);
	var showFahrenheit_value = document.querySelector('fahrenheit-value');
	showFahrenheit_value.textContent = calculaTemperature.valorIn;

	//To_Kelvin
	var showKelvin_name = document.querySelector('kelvin-name');
	calculaTemperature.fromCelsiusToKelvin(gradeIn);
	var showKelvin_value = document.querySelector('kelvin-value');
	showKelvin_value.textContent = calculaTemperature.valorIn;
}

function getFahrenheit() {
	var gradeIn = document.getElementById("field").value;

	const calculaTemperature = new Temperature(gradeIn);

	//To_Celsius
	calculaTemperature.fromFahrenheitToCelsius(gradeIn);
	var showCelsius_ = document.querySelector('celsius');
	showCelsius_.textContent = calculaTemperature.valorIn;

	//To_Kelvin
	calculaTemperature.fromFahrenheitToKelvin(gradeIn);
	var showKelvin_ = document.querySelector('kelvin');
	showKelvin_.textContent = calculaTemperature.valorIn;
}


/* Se crearán las vistas de la caja de calculo...*
switch() {
	case '':
}*/



//let gradeIn = prompt('Ingresa la temperatura en Kelvin: ');
	

//var showCelsius = document.querySelector('celsius');
//showCelsius.textContent = calculaTemperature.valorIn;


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