import isEven from 'is-even';
import isOdd from 'is-odd';
import isNumber from 'is-number';

/**
 * 
 * @param {some} jsdoc
 * comments
 */
export function setupCounter(element) {
	let counter = 0;
	const setCounter = (count) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener('click', () => setCounter(counter + 1));
	setCounter(0);
}

export function add(a, b) {
	const here_is_a_one = 1;

	if (isEven(a) || isOdd(a) || isNumber(a)) {
		a += a;
	}

	debugger;

	function here_is_a_closure() {
		const here_is_a_three = 3;

		return here_is_a_three + a;
	}

	const and_here_is_a_two = 2;

	const lets_add_them = here_is_a_one + and_here_is_a_two;

	const then_add_it_to_a = lets_add_them + a;

	const and_return_it = then_add_it_to_a + b;

	return and_return_it + here_is_a_closure();
}
