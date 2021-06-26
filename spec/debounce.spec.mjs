import { debounce } from '../debounce.js';

describe('debounce', () => {
	let spy;

	beforeEach(() => {
		spy = jasmine.createSpy();

		jasmine.clock().install();
	});

	afterEach(() => {
		spy = null;

		jasmine.clock().uninstall();
	});

	it(`returns a function`, () => {
		const debouncedFn = debounce(spy, 100);

		expect(debouncedFn).toBeInstanceOf(Function);
	});

	it(`does not execute the debounced function immediately`, () => {
		const debouncedFn = debounce(spy, 100);

		debouncedFn();

		expect(spy.calls.count()).toBe(0);
	});

	it(`executes the debounced function after the specified delay`, () => {
		const delay = 100;
		const debouncedFn = debounce(spy, delay);

		debouncedFn();

		expect(spy.calls.count()).toBe(0);

		jasmine.clock().tick(delay-1);

		expect(spy.calls.count()).toBe(0);

		jasmine.clock().tick(1);

		expect(spy.calls.count()).toBe(1);
	});

	it(`executes the debounced function only once after the delay`, () => {
		const debouncedFn = debounce(spy, 100);

		for (let i = 0; i < 10; i++) {
			debouncedFn();
		}

		expect(spy.calls.count()).toBe(0);

		jasmine.clock().tick(100);

		expect(spy.calls.count()).toBe(1);
	});

	it(`can execute the function again after it has been called`, () => {
		const debouncedFn = debounce(spy, 100);

		debouncedFn();
		debouncedFn();

		jasmine.clock().tick(100);

		debouncedFn();
		debouncedFn();

		jasmine.clock().tick(100);

		expect(spy.calls.count()).toBe(2);
	});

	it(`passes through any arguments to the debounced function`, () => {
		const debouncedFn = debounce(spy, 100);

		debouncedFn(1, 2, 3, 4);

		jasmine.clock().tick(100);

		expect(spy.calls.argsFor(0)).toEqual([1, 2, 3, 4]);
	});

	it(`uses the arguments of the last time it was called`, () => {
		const debouncedFn = debounce(spy, 100);

		debouncedFn(1, 2, 3, 4);
		debouncedFn(5, 6, 7, 8);

		jasmine.clock().tick(100);

		expect(spy.calls.argsFor(0)).toEqual([5, 6, 7, 8]);
	});

	it(`maintains the correct 'this' object`, () => {
		let withThis;

		const fn = function () {
			withThis = this;
		};
		const debouncedFn = debounce(fn, 100);

		const obj = {};

		debouncedFn.call(obj, 1, 2, 3, 4);

		jasmine.clock().tick(100);

		expect(withThis).toEqual(obj);
	});

	it(`doesn't override 'this' when used with arrow notation`, () => {
		let withThis;

		const obj = {
			fn: function () {
				withThis = this;
			},
			arrFn: () => {
				withThis = this;
			},
		};

		obj.debouncedFn = debounce(obj.fn, 100);
		obj.debouncedArrFn = debounce(obj.arrFn, 100);

		// 'this' should be set
		obj.debouncedFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withThis).toEqual(obj);

		withThis = undefined;

		// arrFn used arrow notation, so its 'this' shouldn't be obj
		obj.debouncedArrFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withThis).not.toEqual(obj);
	});

	// Use function instead of array notation so 'arguments' exists
	it(`doesn't override 'arguments' when used with arrow notation`, function ()  {
		let withArgs;

		const fn = function () {
			withArgs = Array.from(arguments);
		};
		const arrFn = () => {
			withArgs = Array.from(arguments);
		};

		const debouncedFn = debounce(fn, 100);
		const debouncedArrFn = debounce(arrFn, 100);

		// 'arguments' should be set
		debouncedFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withArgs).toEqual([1, 2, 3, 4]);

		withArgs = undefined;

		// arrFn used arrow notation, so its 'arguments' shouldn't be set
		debouncedArrFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withArgs).not.toEqual([1, 2, 3, 4]);
	});
});
