var boxOffice = document.querySelector('.boxOffice');

function logTemperature(box) {
	let width = box.offsetWidth;
	let height = box.offsetHeight;
	box.textContent = 'width'+' by'+' height';
}

logTemperature(boxOffice);
