const refs = {
	changeColorBtnRef: document.querySelector('.change-color'),
	body: document.querySelector('body'),
	hexColorCode: document.querySelector('.color'),
};

refs.changeColorBtnRef.addEventListener('click', onBtnClickChangeColor);

function onBtnClickChangeColor() {
	const generatedColor = getRandomHexColor();

	refs.body.style.backgroundColor = generatedColor;
	refs.hexColorCode.textContent = generatedColor;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;
}
