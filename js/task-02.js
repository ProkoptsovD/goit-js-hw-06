const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const markupWithIngredients = ingredients.map(function (ingredient) {
	const tagLi = document.createElement('li');

	tagLi.textContent = ingredient;
	tagLi.classList.add('item');

	return tagLi;
});

ingredientsList.append(...markupWithIngredients);
