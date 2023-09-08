let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportWithAddress2 = {...passportWithAddress,...name,...surname, address:{ ...passportWithAddress.address } };
passportWithAddress2.address.city = 'Bobryisk';
console.log(passportWithAddress1.address.city);
console.log(passportWithAddress2.address.city);

const kitchenSink = {
  set: new Set([1, 3, 3]),
  map: new Map([[1, 2]]),
  regex: /foo/,
  deep: { array: [ new File(someBlobData, 'file.txt') ] },
  error: new Error('Hello!')
}
kitchenSink.circular = kitchenSink

// ✅ Выполнено полное глубокое копирование
const clonedSink = structuredClone(kitchenSink)
