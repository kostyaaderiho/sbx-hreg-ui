export const selectElContent = (querySelector: string) => {
    const textEl = document.querySelector(querySelector);
    let range;

    if (window.getSelection && textEl) {
        let selection = window.getSelection();

        range = document.createRange();
        range.selectNodeContents(textEl);

        selection?.removeAllRanges();
        selection?.addRange(range);
    } else if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range?.moveToElementText(textEl);
        range?.select();
    }
};
