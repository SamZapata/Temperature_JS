//esto será codigo javascript
/*	Author: SamZapata
	Languaje: JavaScript
	Date: Febrero de 2018
	Program: Archivo de Prueba 1 - Kelvin Weather
	Description: this test is taked from Codecademy, intro to javascript.
	And so, I continus add my code...*/

//Define variables y calcula su valor sobre las ecuaciones ya establecidas
let kelvin = 294;
let celsius = 0;
let fahrenheit = 0;

/*i. Programa para pedir temperatura kelvin y mostrarla en celcius y farenheit. 
*/

//El usuario da la temperatura kelvin
kelvin = prompt('Ingresa la temperatura en Kelvin: ')

//El sistema muestra la temperatura en celsius y fahrenheit
//console.log(celsius,fahrenheit);

celsius = kelvin - 273;
showCelsius = document.querySelector('celsius');
showCelsius.textContent = celsius;

fahrenheit = Math.floor((celsius*(9/5))+32);
showFahrenheit = document.querySelector('fahrenheit');
showFahrenheit.textContent = fahrenheit;

/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/