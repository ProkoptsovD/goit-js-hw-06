const changeColorBtnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const hexColorCode = document.querySelector('.color');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
	const generatedColor = getRandomHexColor();

	bodyRef.style.backgroundColor = generatedColor;
	hexColorCode.textContent = generatedColor;
};

changeColorBtnRef.addEventListener('click', changeColor);
