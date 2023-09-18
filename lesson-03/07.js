// Удали все нечетные цифры в двухмерном массиве.

// Полученный результат выведи в консоль

const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

function isEven(num) {
    return num % 2 === 0;
}
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (!isEven(numbers[i][j])) {
            numbers[i][j] = null;
        }
    }
}

console.log(numbers);
