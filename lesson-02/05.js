let passport = {
    name: "Petr",
    surname: "Petrov",
};

let Passport = Object.assign({}, passport);
Passport1.name = "Ivan";

console.log(passport);
console.log(Passport1);
