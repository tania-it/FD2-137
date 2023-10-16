
var person = ['name', 'passport', 'lastname', 25];

var obj = {};
var obj1 = new Object();

var personsObj = [
    {
        name: 'Tanusha1',
        lastname: 'Barabash',
        passport: 'HB3040blablabla',
        age: 37,
    },
    {
        name: 'Tanusha2',
        lastname: 'Barabash',
        passport: 'HB3040blablabla',
        age: 37,
    },
    {
        name: 'Tanusha3',
        lastname: 'Barabash',
        passport: 'HB3040blablabla',
        age: 37,
    }
];
console.log("name " + personsObj[0].name + " lastname " + personsObj[0].lastname + " passport " + personsObj[0].passport + " age " + personsObj[0].age);


var personObj = {
    name: 'Tanusha',
    lastname: 'Barabash',
    passport: 'HB3040blablabla',
    age: 37,
    isRun: true
}
console.log("name " + personObj.name + " lastname " + personObj.lastname + " passport " + personObj.passport + " age " + personObj.age + " isRun " + personObj.isRun);;

personObj.gender = 'Female';
console.log('gender' in personObj);
delete personObj['isRun'];
console.log("name " + personObj.name + " lastname " + personObj.lastname + " passport " + personObj.passport + " age " + personObj.age);

// output of keys and values of these keys:
for (let key in personObj) {
    console.log('key: ' + key + " value: " + personObj[key]);
}
/***** Деструктуризация параметров в функциях ********/

const userProfile = {
    name: 'Tanusha',
    commentsQty: 23,
    hasSignedAgreement: false,
}
// name & commentsQty - деструктуризация параметров в функции
const userInfo = ({ name, commentsQty }) => {

    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile));

// надо будет написать свой класс 
// валидатор
