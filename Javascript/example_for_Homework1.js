//const ???

let firstName;
let lastName;
let middlename;
let age; 


do {
  firstName = prompt ('Введите вашу фамилию:');  
} while (!firstName);

do {
    lastName = prompt ('Введите ваше имя:');
} while (!lastName);

do {middlename = prompt ('Введите ваше отчество:')
} while (!middlename);

do {
     const userInput = prompt ('Введите ваш возраст:');
     age = userInput ? Number(userInput) : NaN;
  } while (!isFinite(age) || age > 150 || age < 1 );
  

const fio = `${firstName} ${lastName} ${middlename}`;

alert (fio);
alert (age);




/*while (true) {
    gender = prompt('Введите ваш пол: "M" или "Ж":');   // string || null
    if (typeof gender === 'string') {
            gender = gender.toUpperCase(); // to avoid confusing between Lowercase and Uppercase chars   
    } else {
        gender = undefined;
    }
    if (gender !== undefined && (gender == 'М' || gender == 'Ж')) {
        break;
    }
}*/


/*let gender = null;
    if (male == true) {
        gender = 'мужской';
    } else {
        gender = 'женский';
    }
message += 'Ваш пол : ' + gender + '\n';
*/