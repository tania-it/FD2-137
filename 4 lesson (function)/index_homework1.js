const maxAge = 150, 
      minAge = 0;

function keepWithoutChange(data) {
    return data;
}      

function transformToNumber(data) {
    if (!data) {
        return NaN;
    }

    return Number (replaceSymbols(data, ',','.'));
}

function isNonEmptyString(value) {
    return Boolean(value);
}
function isValidAge(inputAge) {
    return Number.isFinite(inputAge) && inputAge >= minAge && inputAge <= maxAge;
}


const   firstName = getUserInput ('Введите вашу фамилию:', keepWithoutChange, isNonEmptyString);
const   middleName = getUserInput ('Введите ваше имя:', keepWithoutChange, isNonEmptyString);
const   lastName = getUserInput ('Введите ваше отчество:', keepWithoutChange, isNonEmptyString);
let     age = getUserInput ('Введите ваш возраст:', transformToNumber, isValidAge);
let     gender;

/*do {
    firstName = prompt('Введите вашу фамилию:');
    if (typeof firstName === 'string') {
        firstName = firstName.trim(); // remove empty spaces before and after inputtext
    } else {
        firstName = null;
    }
} while (Boolean(firstName) === false); 

do {
    middleName = prompt('Введите ваше имя:');
    if (typeof middleName === 'string') {
        middleName = middleName.trim(); // remove empty spaces before and after inputtext
    } else {
        middleName = null;
    }
} while (Boolean(middleName) === false); 

do {
    lastName = prompt ('Введите ваше отчество:'); 
    if (typeof lastName === 'string') {
        lastName = lastName.trim();   // remove empty spaces before and after inputtext
    } else {
        lastName = null;
    }
} while (Boolean(lastName) === false); 

function getUserAge() {
    let age2;
    do {
        const userInput = prompt ('Введите ваш возраст:');   // string || null
        //age = userInput ? Number (userInput) : NaN;
        if (userInput !== undefined || userInput !== null || userInput !== false) {
            let normalizedUserInput = ''; // a line where all commas are replaced with dots
            for (const char of userInput) {
                if (char === ',') {
                    normalizedUserInput +='.';
                } else {
                    normalizedUserInput += char;
                }
            }
            age2 = new Number(normalizedUserInput);
        } else {
            age2 = NaN;
        }
    } while (isNaN(age2) || age2 > maxAge || age2 < minAge);

    return age2;
}   
    age = getUserAge();
/*do {
    gender = prompt('Введите ваш пол: "M" или "Ж":');   // string || null
    if (typeof gender === 'string') {
        gender = gender.toUpperCase(); // to avoid confusing between Lowercase and Uppercase chars   
    } else {
        gender = null;
    }
} while (gender === null || (gender !== 'М' && gender !== 'Ж'));*/

/*function getUserGender() {
    let gender2;
    do {
        gender2 = prompt('Введите ваш пол: "M" или "Ж":');   // string || null
        if (typeof gender2 === 'string') {
            gender2 = gender2.toUpperCase(); // to avoid confusing between Lowercase and Uppercase chars   
        } else {
            gender2 = null;
        }
    } while (gender2 === null || (gender2 !== 'М' && gender2 !== 'Ж'));

    return gender2;
}
 
gender = getUserGender();

let retirementStatus;

if (gender == 'M' && age >= 63) {
    retirementStatus = 'Да';
} else if (gender == 'Ж' && age >= 58) {
    retirementStatus = 'Да'; 
} else {
    retirementStatus = 'Нет';
}
*/


let message = 'Ваше ФИО : ' + firstName + ' ' + middleName + ' ' + lastName + '\n';
    message += 'Ваш возраст : ' + age + '\n';
    message += 'Ваш пол : ' + gender + '\n';
    message += 'На пенсии : ' + retirementStatus + '\n';

alert(message);

function getUserInput (message) {
    let userInput
do {
    userInput = prompt('message');
    if (typeof userInput === 'string') {
        userInput = userInput.trim(); // remove empty spaces before and after inputtext
    } else {
        userInput = null;
    }
} while (Boolean(userInput) === false); 
    return userInput;
}

function getUserInput (message, transformData, isValid) {
    let userInput = null;
    let isCancelled = false;
    do {
       const rawuserInput = prompt(message);
        isCancelled = rawuserInput === null;

        if (isCancelled) {
            userInput = null;
        } else {
            userInput = transformData(rawuserInput);
        }
    } while (isCancelled || !isValid(userInput));
    return userInput;
}
function replaceSymbols (str, targetSymbol, replacementSymbol) {
    let normalizedUserInput = ''; // a line where all commas are replaced with dots

    for (const char of inputString) {
        if (char === 'targetSymbol') {
           resultstring += replacementSymbol;
        } else {
           resultString += char;
        }
    }
        return resultString;

}