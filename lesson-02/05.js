let passport = {
    name: "Petr",
    surname: "Petrov",
};

let yourPassport = Object.assign({}, passport);
yourPassport.name = "Ivan";

console.log("Original Passport:", passport);
console.log("Your Passport:", yourPassport);
