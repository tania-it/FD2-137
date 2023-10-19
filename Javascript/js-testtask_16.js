"use strict";
class Animal {
    // конструктор описывается явно
    constructor() {
        this.eyes = 2; // пусть у каждого животного 2 глаза
    }
    // новый синтаксис описания методов - без this.имя = function()...
    // методы автоматически будут добавлены в прототип класса 

    showEyes() {
        console.log('eyes:' + this.eyes);
    }

    setLegs(legs) {
        this.legs = legs;
    }
    showLegs() {
        console.log('legs:' + this.legs);
    }
}
/*********************************************************************** */
class Tiger extends Animal {// тигр - это животное} 

    constructor() {
        super(); // нужно явно вызывать конструктор класса-предка, 
        // иначе this вообще будет недоступен 
        this.setLegs(4); // у тигра 4 ноги        
    }

    roar() // и тигр умеет рычать
    { console.log('я реву!'); }

}

class Butterfly extends Animal { // бабочка это животное 

    constructor() {
        super();
        this.setLegs(6); // у бабочки 6 ног  
    }

    fly() // и бабочка умеет летать 
    { console.log('я летаю!'); }

}

const tigerJohn = new Tiger;  /* создаём объект класса Tiger */
const tigerPatric = new Tiger; /* создаём объект класса Tiger */
const butterflyLisa = new Butterfly; /* создаём объект класса Butterfly */

tigerJohn.showEyes();
tigerJohn.showLegs();
tigerJohn.roar();

tigerPatric.showEyes();
tigerPatric.showLegs();
tigerPatric.roar();

butterflyLisa.showEyes();
butterflyLisa.showLegs();
butterflyLisa.fly();

console.log(tigerJohn instanceof Animal);  /* Джон - животное? */

console.log(tigerJohn instanceof Tiger);  /* Джон - тигр? */

console.log(tigerJohn instanceof Butterfly); /* Джон - бабочка? */

console.log(butterflyLisa instanceof Animal); /* Лиза - животное? */

console.log(butterflyLisa instanceof Tiger); /* Лиза - тигр? */

console.log(butterflyLisa instanceof Butterfly); /* Лиза - бабочка?*/


