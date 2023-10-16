// создаём функции-фалидаторы
const required = (value) => {
    return Boolean(value) ? null : {required: true};
};
const minLength = (minLength) => {
    // функция-фалидатор создаётся другой функцией
    return (value) => {
        return String(value).length >= minLength ? null : {minLength: true};
    };
};
const maxLength = (maxLength) => {
    return (value) => {
        return String(value).length <= maxLength ? null : {maxLength: true};
    };
};
const min = (min) => {
    return (value) => {
        return value >= min ? null : {min: true};
    };
};
const max = (max) => {
    return (value) => {
        return value <= max ? null : {max: true};
    };
};


class Validator {
    validators;
    config;
    enabled;

    constructor(validators, config) {
        this.validators = validators;
        this.config = config;
        this.enabled = true; 

    }
    
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    toggle() {
        this.enabled = !this.enabled;
    }

// в цикл for сделать проверку по config (конфигуратор) 
// если 
    validate(value) {
        if (this.enabled === false) {
            return null;
        } 
        console.log(this.validators);
        let result = [];

        for (let i = 0; i < this.validators.length; i++) {
            let currentValidator = this.validators[i];
             result.push(currentValidator(value)); 
        }
        console.log (result);
        return null;
    }
}

const validator = new Validator([
    required,
    minLength(5),
    maxLength(25),
]);

validator.validate('test');
validator.disable();

 const res = validator.validate('mama');
 console.log(res);

 