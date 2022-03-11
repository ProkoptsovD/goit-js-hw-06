const categories = document.querySelectorAll('.item');

//находит категории
const getCategory = function () {
	const categoryList = [];

	categories.forEach((category) => {
		categoryList.push(category.firstElementChild);
	});

	return categoryList;
};

//считает количество категорий
const getNumberOfCategories = () =>
	console.log(`Number of categories: ${getCategory().length}`);

//находит назнания категорий
const getCategoryNames = function () {
	return getCategory().map(
		(categoryName) => `Category: ${categoryName.textContent}`
	);
};

// считает количество элементов в каждой категории
const getNumberOfElemsInCategory = () =>
	getCategory().map(
		(category) => `Elements: ${category.nextElementSibling.children.length}`
	);

//логирует результаты
const logResults = function () {
	const categoryNames = getCategoryNames();
	const amountOfElemsInCategory = getNumberOfElemsInCategory();
	const arr = [];

	for (let i = 0; i < categoryNames.length; i += 1) {
		arr.push(categoryNames[i], amountOfElemsInCategory[i]);
	}

	return arr.join`\n`;
};

getNumberOfCategories();
console.log(logResults());
