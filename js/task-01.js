const refs = {
	categories: document.querySelectorAll('.item'),
};

logInfo(refs.categories);

function logInfo(arr) {
	const categoriesInfo = getCategoryInfo(arr);
	const categoriesQuantaty = Object.entries(categoriesInfo);

	console.log(`Number of categories: ${categoriesQuantaty.length}`);

	categoriesQuantaty.map((category) => {
		console.log(`Category: ${category[0]}`);
		console.log(`Elements: ${category[1]}`);
	});
}

function getCategoryInfo(arr) {
	const categoryNames = {};

	arr.forEach((category) => {
		const name = category.firstElementChild.textContent;
		const numberOfElements = category.children[1].children.length;

		categoryNames[name] = numberOfElements;
	});

	return categoryNames;
}
