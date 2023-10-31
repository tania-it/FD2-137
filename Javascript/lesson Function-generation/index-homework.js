// функция-генератор отработает в цикле for...of
function* getValues(symbols, repeatCount) {
    for (const symbol of symbols) {
        for (let i = 1; i <= repeatCount; i++) {
            yield symbol;
        }
    }
}

for (const symbol of getValues(['a', 'b'], 5)) {
    console.log(symbol);
}
/******************************************************************************************* */
// генератор может позаимствовать прерывание из другого генератора, когда мы пишем через yield*
function* getValues(symbols, repeatCount) {
    for (const symbol of symbols) {
        yield* repeatTimes(symbol, repeatCount);
    }
}
// генератор используется, когда у нас некое подобие цикла, но с очень большой гибкостью    
// генератор переиспользует значение от другого генератора

function* repeatTimes(value, repeatCount) {
    for (let i = 1; i <= repeatCount; i++) {
        yield value;
    }
}
/********************************************************************************************** */
const iterableObject = {
    values: [1, 2, 3],
    *[Symbol.iterator]() {
        yield* this.values.values();
    }
};
for (const value of iterableObject) {
    console.log(value);
}
/* цикл for...of у обычных объектов никогда не работает!
 но если записать через *[Symbol.iterator], то получается ключом к работе
 цикла for...of является метод [Symbol.iterator]
 То есть добавишь в объект [Symbol.iterator], то цикл for...of с ним работает.  
*/
/**************************************************************************************** */

// 
class Test {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
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
const t = new Test();
[...t];
console.log (t/2);                  // объект может превращаться в число и делиться
console.log(`I have ${t} apples`);  // объект стал строкой и вернет 'I have five apples'


