const _async = (callback) => {
    //console.log(callback);
    let generator = callback(a, b);

    const process = (current) => {
        if (current.done) {
            return;
        }

        current.value.then(result => {
            console.log('Call from then: ' + result);
            process(generator.next());
        });
    }
    process(generator.next());
}

const firstAsyncAction = (a) => {
    console.log('a: ' + a);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a * a);
        }, 1000);
    });
}

const secondAsyncAction = (b) => {
    console.log('b: ' + b);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(b * b);
        }, 2000);
    });
}

let a = 1;
let b = 2;
const testFunction = _async(function* (a, b) {
    return (yield firstAsyncAction(a)) + (yield secondAsyncAction(b));
});
console.log(testFunction);
//testFunction().then(res => console.log(res));
