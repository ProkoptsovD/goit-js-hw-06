const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

const onInputTyping = () => {
	const DEFAULT_NAME = 'Anonymous';
	const { value } = inputElem;

	value
		? (outputElem.textContent = value)
		: (outputElem.textContent = DEFAULT_NAME);
};

inputElem.addEventListener('input', onInputTyping);
