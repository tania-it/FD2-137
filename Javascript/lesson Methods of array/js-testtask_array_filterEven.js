function filterEven(...numbers) {
    return numbers.filter((el) => {  // можно вместо el называть как угодно number ...
        return el % 2 === 0;
    });
}

// find_Even(1, 2, 5, 8, 4);