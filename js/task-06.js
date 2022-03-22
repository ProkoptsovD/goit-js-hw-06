const inputValidationElem = document.querySelector('#validation-input');

inputValidationElem.addEventListener('blur', checkEnteredData);

function checkEnteredData(e) {
	const {
		value: { length: enteredValue },
		dataset: { length: requeredValue },
	} = e.currentTarget;
	const isDataValid = enteredValue == requeredValue;

	isDataValid ? addClass('valid') : addClass('invalid');
}

function addClass(className) {
	const input = document.querySelector('#validation-input');

	input.className = '';
	input.classList.add(className);
}
