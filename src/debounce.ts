const debounce = function<T extends (...args: any) => any> (fn: T, delay: number) {
    // Used to create a version of fn that will execute only
    // after no attempt to call it has been made for delay ms

    // Note this will uncouple the callback from user input,
    // if used as an event callback. This can cause popup blockers etc.

    // This throttling is useful, for example, for waiting until
    // the user has stopped typing before executing a keyup callback

    let timeout: ReturnType<typeof setTimeout> | undefined;

    return function (this: any, ...args: Parameters<T>) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            timeout = undefined;
            fn.apply(this, args);
        }, delay);
    };
};

export { debounce };
export default debounce;