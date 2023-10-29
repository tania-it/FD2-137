class NumbersArray extends Array {
    sum() {
    return this.reduce((el, acc) => acc += el,0);
    }
}
const myArray = new NumbersArray (2, 5, 7);
/*
console.log (myArray);
myArray.sum();
console.log (myArray.sum());*/


class AsyncArray extends Array {
    /*last() {
        console.log(this);
        return this[this.length - 1];
    }*/
    serialMap(callback) {
        return new Promise((resolve, reject) => {
            //console.log('from serialMap Promise');
            /*Promise.all(this.map(callback)).then(results => {
                results.forEach((item, index) => {
                    this[index] = item;
                })
                resolve(this);
            });*/

            let o = {count: 0};
            this.map(callback).forEach((item, index) => {
                item.then(res => {
                    console.log('res: ' + res)
                    this[index] = res;
                    o.count++;
                    console.log(o);
                    //resolve(this);
                });
            });
           resolve(this);
        });
    }
}

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    // любое асинхронное преобразование
    setTimeout(() => {
        resolve(el * 2);
    }, 1000);
});

const asyncArray = new AsyncArray(1, 2, 3);

asyncArray.serialMap(asyncTransformation).then(result => {
    // result - экземпляр AsyncArray с результатами преобразований
    console.log(result);
});

/*******************************************************************  */
const _async = (callback) => {
    //console.log(callback);
    let generator = callback(a, b);

    /*for (let cur of generator) {
        console.log(typeof cur);
        cur.then(result => result);
    }*/

    process = (current) => {
        //let current = generator.next();
        if (current.done) {
            return;
        }
        current.value.then(result => {
            console.log('Call from then');
            process(generator.next());
        });
    }
    process(generator.next());
}

const firstAsyncAction = (a) => {
    console.log('a: ' + a);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a);
        }, 1000);
    });
}

const secondAsyncAction = (b) => {
    console.log('b: ' + b);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(b);
        }, 2000);
    });
}

let a = 1;
let b= 2;
/*const testFunction = _async(function* (a, b) {
    return (yield firstAsyncAction(a)) + (yield secondAsyncAction(b));
});*/
