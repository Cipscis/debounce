import debounce from '/debounce';
import activate from 'activate';

const increment = function (e) {
	e.preventDefault();

	let el = e.target;
	let activateNum = parseInt(el.getAttribute('data-activate-count'));

	activateNum += 1;

	el.setAttribute('data-activate-count', activateNum);
};

activate('.js-debounce-fast', debounce(increment, 200));
activate('.js-debounce-slow', debounce(increment, 1000));
