function getSumNumber(num){
   let myarr = ['2020', '2021', '2022', '2013'];
//   let mystr = myarr.toString().split('');
  
    let sum = 0;
    let tmp;
    for (let i=0; i < myarr.length; i++) {
        console.log (myarr[i]);
        tmp = num % 10; // 3    2
        num = (num - tmp) / 10;
        sum += tmp;
        console.log (sum);
    }
    return sum;
}

result = getSumNumber();
console.log(result);
// надо собирать эти суммы цифр каждого элемента в отдельный массив и потом применить фильтр к этим суммам
// и вывести элементы которые подпадают под условие фильтра.

function getSelectedNumbers (result, i, a) {
        return result === 6;  // вывести те элементы, сумма цифр которых = 6;
}
let myarr = [2020, 2021, 2022, 2013];
console.log( myarr.filter(getSelectedNumbers));





/* let myarr = [2020, 2021, 2022, 2023];

   console.log(
    myarr.filter (val => sum === 13 )); */