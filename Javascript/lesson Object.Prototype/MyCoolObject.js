class MyCoolObject extends MyObject {
        coolIndex = 100;

    constructor (value, coolIndex) {
        super (value);
        this.coolIndex = coolIndex;
    }

       
        hello() {
                console.log (this.value);
                this.#bye();                 //super.hello();   вызовет метод из родительского класса
        }

        #bye() {
            console.log(this.coolIndex);
        }
}
