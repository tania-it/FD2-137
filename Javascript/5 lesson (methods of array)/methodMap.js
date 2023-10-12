
function func_m (value,i,arr) {
   return value*value; 
}
// Метод map() позволяет трансформировать один массив в другой при помощи функций-колбэка.
let mm = [3,5,2];
console.log (mm.map(func_m));
// map(func_m) передаём колбэк-функцию,которая будет возвращать какое-то значение.
// именно это значение попадёт в итоговый трансформированный массив.
console.log (mm.map(v => v*v*v));

/****************************************************************************** */
const myArray = [1,2,3,4,5];

const newArray = myArray.map(el => el*3);
console.log(myArray);
console.log(newArray);

/****************************************************************************** */
const myArray1 = [1,2,3,4,5];
const newArray1 = myArray.map(function(el) {
    return (el*2);
});
console.log(myArray);
console.log(newArray);