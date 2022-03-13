const enteredData = document.getElementById('validation-input');

const checkEnteredData = () => {
	const { value, dataset } = enteredData;

	value.length == dataset.length
		? enteredData.classList.add('valid')
		: enteredData.classList.add('invalid');
};

enteredData.addEventListener('blur', checkEnteredData);
