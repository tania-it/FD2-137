function* getValues (symbols, repeatCount) {
    for (const symbol of symbols) {
        {
            yield* repeatTimes(symbol,repeatCount);
        }
    }
}

function* repeatTimes(value, repeatCount) {
    for(let i = 1; i <= repeatCount; i++){
        yield value;
}
}

const iterableObject = {
    values: [1,2,3],
    [Symbol.iterator]() {
        return this.values.values();
    }
};

/*const iterableObject = {
    values: [1,2,3],
    *[Symbol.iterator]() {
        yield* this.values.values();
    }
};
*/

class Test {
    *[Symbol.iterator]() {
        yield1;
        yield2;
        yield3;
    }
    [Symbol.toPrimitive](hint) {
    switch (hint) {
        case 'number':
            return 5;
        default:
            return 'five';    
    }
}
} 




const _disabled = new WeakMap();
 class Test {
    constructor() {
        _disabled.set (this, false);

    }
    get disabled() {
        _disabled.get(this);
     }
 }
 
