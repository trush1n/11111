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
