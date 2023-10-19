const timerId = setTimeout(() => {
    console.log(5);
}, 5_000);

setTimeout(() => {
    clearTimeout(timerId);
    setTimeout(() => {
        console.log('6');
    clearInterval(intervalId);    
    }, 3_000);
}, 3_000);


let s = 0;
 
const intervalId = setInterval(() => {
    console.log(++s);
}, 1_000);

