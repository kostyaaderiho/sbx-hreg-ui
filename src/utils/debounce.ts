/**
 * Debounce function call.

 */
export const debounce = (
    func: Function,
    wait?: number,
    immediate: boolean = false
): (() => void) => {
    let timeout: number | undefined;

    return function () {
        // @ts-ignore
        let self = this,
            args = arguments;
        let later = function () {
            timeout = undefined;
            if (!immediate) {
                func.apply(self, args);
            }
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = window.setTimeout(later, wait);

        if (callNow) func.apply(self, args);
    };
};
