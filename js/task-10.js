const elemRefs = {
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
	numberOfBoxes: document.querySelector('input[type="number"]'),
	parentBox: document.querySelector('#boxes'),
};

let amount = Number('');

elemRefs.numberOfBoxes.addEventListener('input', onInputGetQuantaty);
elemRefs.createBtn.addEventListener('click', onCreateBtnClick);
elemRefs.destroyBtn.addEventListener('click', onDestroyBtnClick);
window.addEventListener('keypress', onEnterKeypress);

function onInputGetQuantaty(event) {
	amount = event.currentTarget.value;
}

function onCreateBtnClick() {
	createBoxes(amount);
}

function onEnterKeypress(event) {
	if (event.code.toLowerCase() === 'enter') createBoxes(amount);
}

function onDestroyBtnClick() {
	destroyBoxes();
}

// проеряет правильность введенного числа
function validateRange(quantaty) {
	const min = Number(elemRefs.numberOfBoxes.min);
	const max = Number(elemRefs.numberOfBoxes.max);

	return quantaty < min || quantaty > max;
}

//создает нужное количество div
function createBoxes(amount) {
	const markup = [];
	let boxSize = 30;

	if (validateRange(amount)) {
		alert('Пожалуйста, введите число от 1 до 100');
		elemRefs.numberOfBoxes.value = '';
		return;
	}

	for (let i = 0; i < amount; i += 1) {
		markup.push(
			`<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
		);
		boxSize += 10;
	}

	elemRefs.parentBox.insertAdjacentHTML('afterbegin', markup.join``);
}

// удаляет разметку
function destroyBoxes() {
	elemRefs.parentBox.innerHTML = '';
	elemRefs.numberOfBoxes.value = '';
	amount = 0;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
