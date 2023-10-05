function countDuplicates(string) {
    const stat = {};
//    let string = {};
  
    for (const char of string) {
       const currentCounter = stat[char] ?? 0; // проверка на существование свойства в обьекте
       // если нет этого свойства в обьекте, то currentCounter = 0, а если есть ключ то берем значение по этому ключу;
       stat[char] = currentCounter + 1;
    }

    return stat;
}

console.log(countDuplicates('papa'));