function printWithDelay(text, arrDelay) {
    if (typeof text !== 'string' || !Array.isArray([arrDelay])) {
        return;
    }
   arrWords = text.trim().split(' ');
   console.log(arrWords);
    if (arrWords.length > arrDelay.length) {
        const lastValue = arrDelay[arrDelay.length - 1];

        do { 
            arrDelay.push(lastValue);
        } while (arrWords.length > arrDelay.length);
    }
    console.log(arrDelay);

    let delay = 0;
    console.log('before forEach');
    arrWords.forEach((element,i) => {
        delay += arrDelay[i];
        console.log(element + ' / ' + arrDelay[i] + ' / ' + delay);
        /*let promise = setDelay(delay * 1000);
        promise.then(function() {
            console.log(element);
        })*/

        /*setTimeout(function() {
            console.log(element)
        }, delay * 1000);*/
        let res = createTask();
        res.then();
    });
    console.log('after forEach');   
}
// составляем функцию-задержку с помощью Promise:
function setDelay(delay) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => resolve('done'), delay);
    });
}

async function createTask() {
    for (let i = 0; i < 1000000000; i++) {

    }
}

printWithDelay('Мама мыла раму рано', [2, 6, 7,]);
