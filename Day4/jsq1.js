function debounce(func, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
}

const log = debounce(() => console.log("Debounced!"), 300);
window.addEventListener("resize", log);
