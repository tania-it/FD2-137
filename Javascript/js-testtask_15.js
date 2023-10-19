class Person {
    #firstName;
    #lastName;
    
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
// get срабатывает при обращении через экземпляр к свойству    
      get firstName() {
        console.log('from getter');
        return '*** ' + this.#firstName + ' ***';
    }

    set firstName(value) {
        console.log('from setter:');
        this.#firstName = value;
    } 

/*      getFirstName() {
        console.log ('from getFirstName()');
        return this.#firstName;
    }
*/
    get lastName() {
        console.log ('from getter lastName:');
        return '~~~' + this.#firstName + '~~~';
    }

    getFullName() {
        return this.#firstName + ' ' + this.#lastName; 
    }
     showFullName() {
        console.log(this.#firstName + ' ' + this.#lastName);
    }
}

let person = new Person('Tatiana', 'Barabash');
person.showFullName();
person.firstName = 'Masha';
person.showFullName(); 

//console.log(person.firstName);
//console.log(person.lastName); 
//console.log(person.getFirstName());

let person2 = {
    firstName: 'Vasya',
    getFirstName: function () {
        return this.firstName;
    }
};

console.log(person2.getFirstName());

let user = function () {

};
