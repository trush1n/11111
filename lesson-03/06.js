<<<<<<< HEAD
// Пора всех жителей массива users3 женить. Добавь в каждый объект ключ-значение isMarried: true. Полученный результат выведи в консоль
const users3 = [
    {
        id: 1,
        user: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        user: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    },
    {
        id: 3,
        user: 'Bob',
        surName: 'Jones',
        address: '135 Pine St'
    },
    {
        id: 4,
        user: 'David',
        surName: 'Davis',
        address: '864 Walnut St'
    },
    {
        id: 5,
        user: 'Mark',
        surName: 'Taylor',
        address: '321 Hickory St'
    },
];

console.log(users3.map(el => el.id  < 6 ? {...el,isMarried: true} :el));
=======
// Пора всех жителей массива users3 женить. Добавь в каждый объект ключ-значение isMarried: true. Полученный результат выведи в консоль
const users3 = [
    {
        id: 1,
        user: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        user: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    },
    {
        id: 3,
        user: 'Bob',
        surName: 'Jones',
        address: '135 Pine St'
    },
    {
        id: 4,
        user: 'David',
        surName: 'Davis',
        address: '864 Walnut St'
    },
    {
        id: 5,
        user: 'Mark',
        surName: 'Taylor',
        address: '321 Hickory St'
    },
];

console.log(users3.map(el => el.id  < 6 ? {...el,isMarried: true} :el));
>>>>>>> cac19344e9a1c3c98406eb608ac72d5b81375623
// Пора всех жителей массива users3 женить. Добавь в каждый объект ключ-значение isMarried: true. Полученный результат выведи в консоль