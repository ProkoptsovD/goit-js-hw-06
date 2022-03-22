const counterValueOnPage = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#counter');

const button = document.createElement('button');

button.textContent = 'reset the counter';
button.classList.add('reset');
counter.insertAdjacentElement('afterend', button);

const btnReset = document.querySelector('.reset');

let counterValue = 0;

const decrease = () => {
	if (counterValue) counterValue -= 1;
	updateCounterValueOnPage(counterValue);
};

const increase = () => {
	counterValue += 1;
	updateCounterValueOnPage(counterValue);
};

const updateCounterValueOnPage = (newValue) => {
	counterValueOnPage.textContent = newValue;
};

const resetToDefault = () => (counterValueOnPage.textContent = 0);

btnDecrement.addEventListener('click', decrease);
btnIncrement.addEventListener('click', increase);
btnReset.addEventListener('click', resetToDefault);
