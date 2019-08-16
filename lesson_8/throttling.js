function f(a) {
    console.log(a)
}

function throttle(func, delay) {
    let timedOut = true;
    let lastNum, obj;
    return function wrapper(num) {
        if (!timedOut) {
            lastNum = num;
            obj = this;
            return;
        }
        func.call(this, num);
        timedOut = false;
        setTimeout(function timeout() {
            timedOut = true;
            wrapper.call(obj, lastNum);
        }, delay);
    };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано