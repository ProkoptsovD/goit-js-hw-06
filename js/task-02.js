const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsMarkup = ingredients.map(function (ingredient) {
	const tagLi = document.createElement('li');

	tagLi.textContent = ingredient;
	tagLi.classList.add('item');

	return tagLi;
});

ingredientsList.append(...ingredientsMarkup);
