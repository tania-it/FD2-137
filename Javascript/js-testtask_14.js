const obj = {
    log: ['a' , 'b' , 'c' ],
    get latest () {
        return this.log[this.log.length - 1];

    }
}
/**************************************************************** */
console.log(obj.latest);

const obj_2 = {
    log: ["example", "test", "task"],
    get latest() {
      if (this.log.length === 0)
        return undefined;
            return this.log[this.log.length -1];
    },
};
console.log(obj_2.latest); // task
/****************************************************************** */
const o = {a: 0};

Object.defineProperty(o, "b", {get: function(){
    return this.a + 1;
}
});
console.log(o.b); // 1

/*Метод Object.defineProperty() определяет новое или изменяет существующее
свойство непосредственно на объекте, возвращая этот объект.
Object.defineProperty(obj, prop, descriptor)
Параметры
obj - Объект, на котором определяется свойство.

prop - Имя определяемого или изменяемого свойства.

descriptor - Дескриптор определяемого или изменяемого свойства.*/