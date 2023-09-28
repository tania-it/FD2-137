const maxAge = 100, minAge = 1;
let firstName, middleName, lastName;
let age;

do {
    firstName = prompt ('Enter your first name');
} while (Boolean(firstName) === false);

do {
    middleName = prompt ('Enter your middle name');
} while (Boolean(middleName) === false);

do {
    lastName = prompt ('Enter your last name');
} while (Boolean (lastName) === false);

do{
    userInput = prompt ('Enter your age');
} while ('')
 
do {
    const userInput = prompt ('Enter your age');
    age = userInput ? Number (userInput) : NaN;
}   while (!isFinite(age) || age > maxAge || age < minAge);

const fio = `${firstName} ${middleName} ${lastName}`;
alert (fio);
alert (age);
  
