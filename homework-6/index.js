class AsyncArray extends Array {
    constructor(...args) {
        super(...args);

    }
    // this - это ссылка класса на самого себя
    serialMap(callback) {
        //   console.log (this);
        return new Promise((resolve, reject) => {
            Promise.all(this.map(callback)).then(results => {
                results.forEach((el) => callback(el));
                  });

                resolve(this);
            })
           

        };
    }


const asyncArray = new AsyncArray(1, 2, 3);
// console.log(asyncArray);


const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    resolve(el * el);

});

// !!! callback = asyncTransformation
asyncArray.serialMap(asyncTransformation).then(result => {
    console.log(result);
});

console.log(asyncArray);









/*
 
const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    // любое асинхронное преобразование
});
*/

/*
asyncArray.serialMap(asyncTransformation).then(result => {
    // result - экземпляр AsyncArray с результатами преобразований
});*/