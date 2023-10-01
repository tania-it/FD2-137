


function findDuplicates(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string' ) {
      return '';
    }

    let stringResult = '';
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    for (var i = 0; i < string1.length; i++) {
        let letter = string1[i]; // текущая буква, с которой мы сравниваем
        if (string2.indexOf(letter) >= 0) {
            if (stringResult.indexOf(letter) === -1) {
                stringResult = stringResult + letter;
            }
        }
    }

    return stringResult;
}

let string1 = 'HELLO';
let string2 = 'WELCOME'; 
// переменная, в которой храниться результат работы функции
const duplicatedSymbols = findDuplicates(string1, string2); 
console.log('найденные символы:', duplicatedSymbols);


/* if (string1[i] === string2[i]) {
        stringresult = stringresult + string1[i];
        console.log(stringresult);

    } else {
        stringresult = 'empty string';
        console.log(stringresult);
    }
}


//const duplicatedSymbols = findDuplicates(string1, string2);

//.toLowerCase()
// string1.indexOf ()
// split
// replace

*/
