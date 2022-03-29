const refs = {
	inputValidationElem: document.querySelector('#validation-input'),
};

refs.inputValidationElem.addEventListener('blur', checkEnteredData);

function checkEnteredData(e) {
	const { value: passedData, dataset: requeredData } = e.currentTarget;
	const isDataValid = Number(passedData.length) === Number(requeredData.length);

	passedData === ''
		? (e.currentTarget.style.border = '2px solid #bdbdbd') //когда в инпуте пустая строка, возвращает инпуту цвет по умолчанию
		: isDataValid
		? addClass('valid')
		: addClass('invalid');
}

function addClass(className) {
	const input = document.querySelector('#validation-input');

	input.className = '';
	input.classList.add(className);
}
