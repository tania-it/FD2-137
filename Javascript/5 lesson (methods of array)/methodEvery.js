function func_ev (value,i,arr) {
    return value < 10;
}
let me1 = [5,7,2]; //все < 10?
console.log ( me1.every(func_ev) ); // смысл метода every-проверить,что условие верно для ВСЕХ элементов массива
let me2 = [5,17,2]; // все < 10?
console.log ( me2.every (func_ev));
