import {sum, mult as multNumbers} from './moduleOne.mjs'; 
// в модуле2 moduleTwo доступна функция которую мы импортировали из другого файла
// используя { } можно импортировать несколько переменных из другого файла
const res1 = sum (10, 2);
console.log (res1);

const res2 = multNumbers (5, 10);
console.log (res2);


/* каждый модуль - это отдельная зона видимости переменных */
/*  in TERMINAL write node modules/moduleTwo.mjs  */
/* с помощью as мы переименовываем переменную в другом модуле */