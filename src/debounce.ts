/**
 * Create a version of fn that will execute only after
 * no attempt to call it has been made for delay ms.
 * The debounced function returns a Promise that
 * resolves to the value returned by fn.
 *
 * Note that this will uncouple the callback from user
 * input, if used as an event callback. This can cause
 * browsers to attempt to block certain behaviour.
 *
 * This throttling is useful, for example, for waiting until
 * the user has stopped typing before executing a keyup callback.
 *
 * @param {Function} fn - A function to debounce
 * @param {number} delay - The duration to wait before calling the function (ms)
 */
const debounce = function<T extends (...args: any) => any> (fn: T, delay: number) {
	// Keep track of the timeout, Promise, and the Promise's resolver across multiple calls
	// This lets later calls in the same queue know about the previous call,
	// to cancel its timeout and use the same promise and resolution

	// Use ReturnType<typeof setTimeout> for support across ES and NodeJS environments
	let timeout: ReturnType<typeof setTimeout> | undefined;

	let promise: Promise<ReturnType<T>> | undefined;
	let res: ((value: ReturnType<T> | PromiseLike<ReturnType<T>>) => void) | undefined;

	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		const scheduleResolution = (resolve: (value: ReturnType<T> | PromiseLike<ReturnType<T>>) => void) => {
			if (timeout) {
				clearTimeout(timeout);
			}

			timeout = setTimeout(() => {
				timeout = undefined;

				promise = undefined;
				res = undefined;

				resolve(fn.apply(this, args));
			}, delay);
		};

		if (res) {
			scheduleResolution(res);
		} else {
			promise = new Promise<ReturnType<T>>((resolve, reject) => {
				res = resolve;
				scheduleResolution(res);
			});
		}

		// There is no type guard for promise on the `if (res)` path,
		// but if res is not undefined, then neither is promise
		return promise as Promise<ReturnType<T>>;
	};
};

export { debounce };
export default debounce;
