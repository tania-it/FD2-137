function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}

/*
let delayPromise = delay(5000);

delayPromise.then(() => {
    console.log('success!');
});
*/



async function asyncDelay(time) {
    /*        setTimeout(function () {
            console.log('done');
       }, time); */
    console.log('waiting:');   
    let delayPromise = await delay(time);
    console.log('finish waiting:');
}
/*asyncDelay(5000).then(() => {
    console.log('success!');
});*/


let arr = ['apple', 'orange', 'peach'];
arr.forEach((value, index) => {
    console.log(value);
    //doHeavyTask(value).then((res) => {console.log(res)});
    //doHeavyTaskPromise(value).then((result) => {console.log(result)});
});
console.log('after loop');

async function doHeavyTask(item) {
    for (i = 0; i < 1_000_000_000; i++) {

    }
    console.log(item);
    return item;
}

function doHeavyTaskPromise(item) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (i = 0; i < 1_000_000_000; i++) {

            }
            resolve(item);
        });
    });
}

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let generator = generateSequence();
  
  for(let value of generator) {
    console.log(value); // 1, затем 2, затем 3
  }




/* составляем функцию-задержку с помощью Promise:
function setDelay(delay) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => resolve('done'), delay);
    });
}
*/