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


const cancelTask = scheduleTask(() => {
    console.log('task');
});


function scheduleTask(task) {

  const id = setTimeout(() => task(), 300); 
        cancelTask();
    return () => clearTimeout(id);
    };


/*queueMicrotask(() => {

}) -     
*/

const stop = renderCycle( () => {

});

function renderCycle(callback) {
    const id = requestAnimationFrame(() => {
            callback;
            requestAnimationFrame 
    });

    return () => {
        cancelAnimationFrame(id);
    };

}