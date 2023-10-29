
const max_Age=150, min_Age=1;
let firstName, middleName, lastName;
let age;

do {  
    firstName = prompt('Enter your first name');
} while (Boolean(firstName) === false); 

do {  
    middleName = prompt('Enter your middle name');
} while (Boolean(middleName) === false); 

do {  
    lastName = prompt('Enter your last name');
} while (Boolean(lastName) === false); 

do {
    userInput = prompt ('enter your age');
} while ('')
do {
    const userInput = prompt ('Enter your age');
    age = userInput ? Number(userInput) : NaN;
} while (!isFinite(age) || age > max_Age || age < min_Age); 

//const lastName = prompt ('Enter your middlename') 
//const middleName = prompt ('Enter your lastname') 

const fio = `${firstName} ${middleName} ${lastName}`;
alert (fio);
