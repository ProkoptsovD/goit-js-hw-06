const customFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const setFontSize = (e) => {
	const { value: selectedFontSize } = e.currentTarget;

	text.style.fontSize = `${selectedFontSize}px`;
};

customFontSize.addEventListener('input', setFontSize);
