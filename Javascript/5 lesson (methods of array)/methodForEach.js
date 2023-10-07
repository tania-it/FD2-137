function func (value, i, arr){ // ф-ция получает 3 аргумента: текущий элемент, текущий индекс и сам массив
    console.log (i + ' / ' + value); 
}
let m = ['Tanusha','!!!', 12345, null, true];
m.forEach(func); // выполняет указанную функцию для каждого элемента массива последовательно

console.log (m); 

m.forEach( (value, i) => console.log (i + ' / ' + value)); // сокращённая запись