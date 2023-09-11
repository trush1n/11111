let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const passportWithAddress2 = structuredClone(passportWithAddress);
passportWithAddress2.address.city = 'Bobryisk';
console.log(passportWithAddress1.address.city);
console.log(passportWithAddress2.address.city);
