// import debounce from '@cipscis/debounce';
import debounce from '../../../../src/debounce.js';

const increment = function (this: HTMLElement, e: MouseEvent) {
	e.preventDefault();

	const el = e.target as HTMLElement;
	const activateCountString = el.getAttribute('data-activate-count');

	let activateCount = activateCountString ? parseInt(activateCountString, 10) : 0;

	activateCount += 1;

	el.setAttribute('data-activate-count', activateCount.toString());
};

const debouncedIncrementFast = debounce(increment, 200);
const debouncedIncrementSlow = debounce(increment, 1000);

document.querySelectorAll<HTMLElement>('.js-debounce-fast').forEach(($el) => $el.addEventListener('click', debouncedIncrementFast));
document.querySelectorAll<HTMLElement>('.js-debounce-slow').forEach(($el) => $el.addEventListener('click', debouncedIncrementSlow));
