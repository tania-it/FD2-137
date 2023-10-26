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
asyncDelay(5000).then(() => {
    console.log('success!');
});






/* составляем функцию-задержку с помощью Promise:
function setDelay(delay) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => resolve('done'), delay);
    });
}
*/