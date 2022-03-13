const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

const handleInput = () => {
	const { value } = input;

	value ? (output.textContent = value) : (output.textContent = 'Anonymous');
};

input.addEventListener('input', handleInput);
