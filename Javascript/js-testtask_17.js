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

            this.map(callback).forEach((item, index) => {
                item.then(res => {
                    console.log('res: ' + res)
                    this[index] = res;
                    if (index === this.length - 1) {
                        resolve(this);
                    }
                });
            });
        });
    }
}

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    // любое асинхронное преобразование
    setTimeout(() => {
        console.log(el);
        resolve(el * 2);
    }, index + 1 * 1000);
});

const asyncArray = new AsyncArray(1, 2, 3);
/*
asyncArray.serialMap(asyncTransformation).then(result => {
    // result - экземпляр AsyncArray с результатами преобразований
    console.log(result);
});*/

/*******************************************************************  */
const _asyncOld = (callback) => {
    //console.log(callback);
    let generator = callback(a, b);

    /*for (let cur of generator) {
        console.log(typeof cur);
        cur.then(result => result);
    }*/

    const process = (current) => {
        //let current = generator.next();
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

const _async = (callback) => {
    return () => {
        //console.log(callback);
        let generator = callback(a, b);

        const process = (current) => {
            //let current = generator.next();
            if (current.done) {
                return Promise.resolve(current.value);
            }

            return Promise.resolve(current.value).then(response => {
                return process(generator.next(response));
            });
        }

        return process(generator.next());
    }
}

/*
function asyncAlt(generatorFunction) {
    // Return a function
    //return function() {
      // Create and assign the generator object
      const generator = generatorFunction(a, b)
  
      // Define a function that accepts the next iteration of the generator
      function resolve2(next) {
        // If the generator is closed and there are no more values to yield,
        // resolve the last value
        if (next.done) {
          return Promise.resolve(next.value)
        }
  
        // If there are still values to yield, they are promises and
        // must be resolved.
        return Promise.resolve(next.value).then(response => {
          return resolve2(generator.next(response))
        })
      }
  
      // Begin resolving promises
      return resolve2(generator.next())
   // }
  }*/

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
//console.log(testFunction());
testFunction().then(res => console.log(res));

/*
const testFunction = asyncAlt(function* (a, b) {
    return (yield firstAsyncAction(a)) + (yield secondAsyncAction(b));
});
testFunction.then(res => console.log(res));*/
