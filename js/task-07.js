const customFontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

const setFontSize = () => {
	const { value: selectedFontSize } = customFontSize;

	text.style.fontSize = `${selectedFontSize}px`;
};

customFontSize.addEventListener('input', setFontSize);
