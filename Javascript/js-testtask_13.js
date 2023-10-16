function getSumNumber(){
   let myarr_select = [];

    for (let i=0; i <= 2023; i++) {
        if (getDigitSum(i) === 13) {
            myarr_select.push(i);
        }
    }
   
    return myarr_select;
}

function getDigitSum(value) {
    let sum = 0;
    while (value > 10) {
        const digit = value % 10;
        sum += digit;
        value = Math.trunc(value / 10)
    }

    sum+= value;

    return sum;
}

result = getSumNumber();
console.log(result);
// надо собирать эти суммы цифр каждого элемента в отдельный массив и потом применить
// фильтр к этим отобранным элментам
// и вывести элементы которые подпадают под условие фильтра.

function getSelectedNumbers (result, i, a) {
        return result === 6;  // вывести те элементы, сумма цифр которых = 6;
}
let myarr = [2020, 2021, 2022, 2013];
console.log( myarr.filter((year) => getDigitSum(year) === 6));




/* let myarr = [2020, 2021, 2022, 2023];

   console.log(
    myarr.filter (val => sum === 13 )); */