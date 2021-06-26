import debounce from '/debounce.js';

const increment = function (e) {
	e.preventDefault();

	let el = e.target;
	let activateNum = parseInt(el.getAttribute('data-activate-count'));

	activateNum += 1;

	el.setAttribute('data-activate-count', activateNum);
};

document.querySelectorAll('.js-debounce-fast').forEach(($el) => $el.addEventListener('click', debounce(increment, 200)));
document.querySelectorAll('.js-debounce-slow').forEach(($el) => $el.addEventListener('click', debounce(increment, 1000)));
