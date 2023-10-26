function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);


    });
}

delay(5000).then(() => {
    console.log('success!');
});









/* составляем функцию-задержку с помощью Promise:
function setDelay(delay) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => resolve('done'), delay);
    });
}
*/