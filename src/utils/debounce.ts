// 防抖函数
function debounce(func: Function, delay: number) {
    let timer:number | null;

    return function (...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            // @ts-ignore
            func.apply(this, args);
            timer = null;
        }, delay);
    };
}
