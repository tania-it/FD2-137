function find_Even(...items) {
    return items.filter((el) => {  // можно вместо el называть как угодно number ...
        return el % 2 === 0
    });
}
console.log(find_Even(1, 2, 5, 8, 4));
console.log(find_Even(1, 3, 5, 9, 7));