function func_s (value, i, arr) {
    return value < 5;
}
let ms1 = [8,3,7]; // есть хотя бы один элемент < 5 ?
console.log (ms1.some(func_s)); // смысл метода some-проверить, что условие верно ХОТЯ БЫ ДЛЯ ОДНОГО элемента массива
let ms2 = [8,6,7]; // есть хотя бы один элемент < 5 ? 
console.log (ms2.some (func_s));
