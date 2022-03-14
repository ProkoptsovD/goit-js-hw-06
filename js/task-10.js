function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxesBtnRef = document.querySelector('[data-create]');
const destroyBoxesBtnRef = document.querySelector('[data-destroy]');
const numberOfBoxesToCreate = document.querySelector('input[type="number"]');
const parentBox = document.querySelector('#boxes');
let amount = Number('');

//проверяет, чтобы введенное число было в нужном диапазоне диапазоне
const validateEnteredQuantatyOfBoxes = (quantaty) => {
	const min = Number(numberOfBoxesToCreate.min);
	const max = Number(numberOfBoxesToCreate.max);

	return quantaty < min || quantaty > max;
};

//создает нужное количество div
const createBoxes = (amount) => {
	const markup = [];
	let boxSize = 30;

	if (validateEnteredQuantatyOfBoxes(amount)) {
		alert('Неправильное число. Пожалуйста, введите число от 1 до 100');
		numberOfBoxesToCreate.value = '';
		return;
	}

	for (let i = 0; i < amount; i += 1) {
		markup.push(
			`<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
		);
		boxSize += 10;
	}

	parentBox.insertAdjacentHTML('afterbegin', markup.join``);
};

// удаляет разметку
const destroyBoxes = () => {
	parentBox.innerHTML = '';
	numberOfBoxesToCreate.value = '';
	amount = 0;
};

// получает число введеное пользователем в поле input
numberOfBoxesToCreate.addEventListener('change', (e) => {
	amount = numberOfBoxesToCreate.value;
});

// обрабатывает событие "клик" на кнопке Create и создает нужное количество div
createBoxesBtnRef.addEventListener('click', () => {
	createBoxes(amount);
});

// обрабатывает событие "клик" на кнопке Destroy и удаляет все div
destroyBoxesBtnRef.addEventListener('click', destroyBoxes);
