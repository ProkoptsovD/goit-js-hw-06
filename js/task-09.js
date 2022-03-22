const changeColorBtnRef = document.querySelector('.change-color');

changeColorBtnRef.addEventListener('click', onBtnClickChangeColor);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClickChangeColor() {
	const bodyRef = document.querySelector('body');
	const hexColorCode = document.querySelector('.color');
	const generatedColor = getRandomHexColor();

	bodyRef.style.backgroundColor = generatedColor;
	hexColorCode.textContent = generatedColor;
}
