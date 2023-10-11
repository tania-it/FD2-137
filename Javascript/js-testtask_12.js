function firstFunction() {

    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }

};
/**************************************************** */
function secondFunction(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
/**************************************************** */
function thirdFunction(arr) {
    let prod = 1;
  for (let i = 0; i < arr.length; i++) {
        prod *= arr[i];
    }
    return prod;
}
let result = thirdFunction([1,2,3,5]);
console.log(result);

/**************************************************** */
function fourthFunction(arr) {
    return arr.filter((el) => (el % 2 === 0) && (0 <= el) && (el <= 100));
}
result = fourthFunction([5,250,752,7,0])
console.log(result);

/**************************************************** */
function fiveFunction(number) {
    let i = 0;
    while (number >= 50) {
        number = number / 2;
        i = i + 1;
    }
    return i;
}
result = fiveFunction(1000);
console.log(result);

/**************************************************** */
function sixFunction() {
    let myarr = [];
    let sum = 0;
    let num;
//   let mystr = myarr.toString();
//    mystr = mystr.split(',');

    for (let num = 1900; num < 2023; num++) {
        console.log (num);
            tmp = num % 10;
            num = (num - tmp) / 10;
            sum += tmp;
    }
    return sum;
 
}
//использовать .filter

arr.reduce(function (accumulator, item, index, array) {
    // ...}, [initial]);    }

    return myarr;})



/*    function getNumbersSum(num) {

        var result = 'num'.split('');

        if (myarr.reduce((acc, el)) => {

            return acc.push();
        }, myarr[0]);

    }
*/
    
 

    function getSumNumber(num){
        let sum = 0;
        let tmp;
        while (num > 0) {
            console.log (num);
            tmp = num % 10; // 3    2
            num = (num - tmp) / 10;
            sum += tmp;
        }
        return sum;
    }
   
result = getSumNumber(523);
console.log(result);

    

