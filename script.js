// select DOM elements
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

//	Array of fruits that is used to search against user typed keyword and
//	to display search result
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

/**
 * Takes a parameter that is used to search against the list of FRUITS
 * and returns an array of matched results
 *
 * @param {string} str			The keyword typed by the user
 * @returns {Array<string>}		An array of fruits that matched the user typed keyword
 */
function search(str) {
	let results = [];

	// for each fruit in the FRUITS array check and add it to results array if the parameter str matches any fruit
	FRUITS.forEach((fruit) => {
		if (fruit.toLowerCase().includes(str.toLowerCase())) {
			results.push(fruit);
		}
	});

	return results;
}

/**
 * Event handler that handles fruit search events whenever a keyboard button is released
 *
 * @param {Object} e	The event object passed by the event
 */
function searchHandler(e) {
	const userInput = input.value;

	// proceed only if userInput is not empty
	if (userInput) {
		const results = search(userInput);

		// proceed only if the search results is not empty
		if (results.length > 0) {
			showSuggestions(results, userInput);
		}
	} else {
		// clear the previous suggestion when the input field is blank
		suggestions.innerHTML = '';
	}
}

/**
 * Displays the search results inside an unordered list
 *
 * @param {Array<string>} results	An array of fruits that matched the user typed keyword
 * @param {string} inputVal			The keyword typed by the user inside the input field
 */
function showSuggestions(results, inputVal) {
	// clear the previous suggestion
	suggestions.innerHTML = '';

	// for each fruit that is matched create an li element and append it to the ul element
	results.forEach((result) => {
		const li = document.createElement('li');

		// find the matched substring and make it bold
		const matchedSubStr = result.substring(
			result.toLowerCase().indexOf(inputVal.toLowerCase()),
			inputVal.length +
				result.toLowerCase().indexOf(inputVal.toLowerCase())
		);

		li.innerHTML = result.replace(matchedSubStr, `<b>${matchedSubStr}</b>`);

		suggestions.appendChild(li);
	});
}

/**
 * Event handler that handles click event on the li element.
 * Replaces the input field with the fruit name contained inside the li element
 *
 * @param {Object} e	The event object passed by the event
 */
function useSuggestion(e) {
	const selectedFruit = e.target.innerText;

	input.value = selectedFruit;
}

// add event listeners
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
