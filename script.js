const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const FRUITS = [
	'Apple',
	'Apricot',
	'Avocado 🥑',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Currant',
	'Cherry',
	'Coconut',
	'Cranberry',
	'Cucumber',
	'Custard apple',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Gooseberry',
	'Grape',
	'Raisin',
	'Grapefruit',
	'Guava',
	'Honeyberry',
	'Huckleberry',
	'Jabuticaba',
	'Jackfruit',
	'Jambul',
	'Juniper berry',
	'Kiwifruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Longan',
	'Lychee',
	'Mango',
	'Mangosteen',
	'Marionberry',
	'Melon',
	'Cantaloupe',
	'Honeydew',
	'Watermelon',
	'Miracle fruit',
	'Mulberry',
	'Nectarine',
	'Nance',
	'Olive',
	'Orange',
	'Clementine',
	'Mandarine',
	'Tangerine',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Plantain',
	'Plum',
	'Pineapple',
	'Pomegranate',
	'Pomelo',
	'Quince',
	'Raspberry',
	'Salmonberry',
	'Rambutan',
	'Redcurrant',
	'Salak',
	'Satsuma',
	'Soursop',
	'Star fruit',
	'Strawberry',
	'Tamarillo',
	'Tamarind',
	'Yuzu',
];

function search(str) {
	let results = [];

	FRUITS.forEach((fruit) => {
		if (fruit.toLowerCase().includes(str.toLowerCase())) {
			results.push(fruit);
		}
	});

	return results;
}

function searchHandler(e) {
	const userInput = input.value;
	if (userInput) {
		const results = search(userInput);

		if (results.length > 0) {
			showSuggestions(results, userInput);
		}
	} else {
		suggestions.innerHTML = '';
	}
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	results.forEach((result) => {
		const li = document.createElement('li');
		li.innerText = result;

		suggestions.appendChild(li);
	});
}

function useSuggestion(e) {
	const selectedFruit = e.target.innerText;

	input.value = selectedFruit;
}

// add event listeners
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
