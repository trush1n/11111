<<<<<<< HEAD
// Удали все нечетные цифры в двухмерном массиве.

// Полученный результат выведи в консоль

const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


function examination(number) {
    return number % 2 === 0;
}
function filterArray(arr) {
    return arr.map(el => el.filter(examination));
}

const filteredArray = filterArray(numbers);
console.log(filteredArray);

=======
// Удали все нечетные цифры в двухмерном массиве.

// Полученный результат выведи в консоль

const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


function examination(number) {
    return number % 2 === 0;
}
function filterArray(arr) {
    return arr.map(el => el.filter(examination));
}

const filteredArray = filterArray(numbers);
console.log(filteredArray);

>>>>>>> cac19344e9a1c3c98406eb608ac72d5b81375623
