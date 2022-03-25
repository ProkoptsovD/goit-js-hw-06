const elemRefs = {
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
	numberOfBoxes: document.querySelector('input[type="number"]'),
	parentBox: document.querySelector('#boxes'),
};

let amount = Number('');

// чтобы вывести сообщение о действии пользователя, типа фича такая
const paragraph = document.createElement('p');

elemRefs.numberOfBoxes.addEventListener('input', onInputGetQuantaty);
elemRefs.createBtn.addEventListener('click', onCreateBtnClick);
elemRefs.destroyBtn.addEventListener('click', onDestroyBtnClick);

window.addEventListener('keypress', onEnterKeypress);

function onCreateBtnClick() {
	if (!validateRange(amount)) {
		destroyBoxes();
	}

	createBoxes(amount);
	alertMessage('create');
	resetValues();
}

function onEnterKeypress(event) {
	const ENTER_CODE_KEY = 'Enter';
	const isEnterKeyPressed = event.code === ENTER_CODE_KEY;

	if (!isEnterKeyPressed) return;

	if (!validateRange(amount)) {
		destroyBoxes();
	}

	createBoxes(amount);
	alertMessage('create');
	resetValues();
}

function onDestroyBtnClick() {
	destroyBoxes();
	alertMessage('destroy');
	resetValues();
}

// получает знаечние введенное пользователем
function onInputGetQuantaty(event) {
	amount = event.currentTarget.value;
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
}

// создает рандомный цвет
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

// выводит сообщение о действии пользователя
function alertMessage(typeOfOperation) {
	let message = '';

	if (typeOfOperation === 'create')
		message = !validateRange(amount)
			? `You have created ${amount} box` + `${amount == 1 ? '' : 'es'}`
			: `Sorry, but you should enter a valid number of boxes first`;
	if (typeOfOperation === 'destroy')
		message = 'You have destroyed all the boxes';

	paragraph.classList.add('message');
	paragraph.textContent = message;
	elemRefs.parentBox.prepend(paragraph);
}

// приводит к дефолтному значению
function resetValues() {
	elemRefs.numberOfBoxes.value = '';
	amount = 0;
}
