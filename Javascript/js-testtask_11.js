 const myArray = [5, 7, 4, 2, 8, 1, 3, 2, 9, 0, 1, 8];
 // myArray.forEach 


function calculateSum(myArray) {
      let sum = 0;

    for (let item of myArray) {
        sum += item;
    }

   return sum;
    
}

console.log(calculateSum(myArray));